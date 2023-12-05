pipeline {
    environment {
        backend = 'backend-image' // Specify your backend Docker image name/tag
        frontend = 'frontend-image' // Specify your frontend Docker image name/tag
        mysqlImage = 'mysql:latest' // Specify the MySQL Docker image
        mysqlContainerName = 'mysql-container' // Specify the name for your MySQL container
        MYSQL_ROOT_PASSWORD = 'Kota@2020'
        MYSQL_PORT = '3306'
        docker_image = ''
        NETWORK = 'deployment_my-network'
        
    }
    
    agent any

    stages {
        
        stage('Stage 0: Pull MySQL Docker Image') {
            steps {
                echo 'Pulling MySQL Docker image from DockerHub'
                script {
                    docker.withRegistry('', 'DockerCred') {
                        docker.image("${mysqlImage}").pull()
                    }
                }
            }
        }
        stage('Stage 0.1: Run MySQL Container') {
            steps {
                script {
                    // sh  'docker container stop mysqldb'
                    // sh  'docker container rm mysqldb'
                    sh  'docker run --name mysqldb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} -d -v "/var/lib/mysql" --network=${NETWORK} mysql:latest'
                }
            }
        }
        
        stage('Stage 1: Git Clone') {
            steps {
                echo 'Cloning the Git repository'
                git branch: 'main', url: 'https://github.com/KaranjitSaha/Employee-Management-System.git'
            }
        }

        stage('Stage 2: Build Spring Boot backend') {
            steps {
                echo 'Building Spring Boot backend'
                sh 'mvn clean install'
            }
        }
        
        stage('Stage 3: Build backend Docker Image') {
            steps {
                echo 'Building backend Docker image'
                sh "docker build -t karanjit708/${backend} ."
            }
        }

        stage('Stage 4: Build frontend Docker image') {
            steps {
                echo 'Building frontend Docker image'
                dir('frontend1') {
                    echo 'Changing to frontend1 directory'
                    sh "docker build -t karanjit708/${frontend} ."
                }
            }
        }

        stage('Stage 5: Push backend Docker image to DockerHub') {
            steps {
                echo 'Pushing backend Docker image to DockerHub'
                script {
                    docker.withRegistry('', 'DockerCred') {
                        // docker.image("${backend}").push()
                        sh 'docker push karanjit708/${backend}'
                    }
                }
            }
        }
        
        stage('Stage 6: Push frontend Docker image to DockerHub') {
            steps {
                echo 'Pushing frontend Docker image to DockerHub'
                script {
                    docker.withRegistry('', 'DockerCred') {
                        // docker.image("${frontend}").push()
                        sh 'docker push karanjit708/${frontend}'
                    }
                }
            }
}

        stage('Stage 7: Clean docker images') {
            steps {
                script {
                    sh 'docker container prune -f'
                    sh 'docker image prune -f'
                }
            }
        }

        stage('Stage 8: Ansible Deployment') {
            steps {
                ansiblePlaybook(
                    becomeUser: null,
                    colorized: true,
                    credentialsId: 'localhost',
                    disableHostKeyChecking: true,
                    installation: 'Ansible',
                    inventory: 'Deployment/inventory',
                    playbook: 'Deployment/deploy.yml',
                    sudoUser: null
                )
            }
        }
    }
}
