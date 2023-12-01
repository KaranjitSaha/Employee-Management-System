package com.KJ.Employee_Management_System.exception;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    private static final Logger logger =
			LogManager.getLogger(ResourceNotFoundException.class);
    public ResourceNotFoundException(String message){
        
        super(message);
        logger.warn("Resource Not Found Exception");
    }
}
