package com.KJ.Employee_Management_System;

import com.KJ.Employee_Management_System.model.Employee;
import com.KJ.Employee_Management_System.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@SpringBootApplication
public class EmployeeManagementSystemApplication implements CommandLineRunner {

	private static final Logger logger =
            LogManager.getLogger(EmployeeManagementSystemApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementSystemApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String ...args) throws Exception{
		logger.debug("This is a debug message"); // DEBUG level
        logger.info("Spring Application Running"); // INFO level
		// Employee employee =new Employee();
		// employee.setFirstName("Ramesh");
		// employee.setLastName("Fadatare");
		// employee.setEmailId("ramesh@gmail.com");
		// employeeRepository.save(employee);

		// Employee employee1 =new Employee();
		// employee1.setFirstName("John");
		// employee1.setLastName("Cena");
		// employee1.setEmailId("cena@gmail.com");
		// employeeRepository.save(employee1);

		logger.warn("This is a warning message"); // WARN level
        logger.error("This is an error message"); // ERROR level
	}

}
