FROM openjdk:17
COPY ./target/Employee_Management_System-0.0.1-SNAPSHOT.jar ./
WORKDIR ./
CMD ["java","-jar","Employee_Management_System-0.0.1-SNAPSHOT.jar"]