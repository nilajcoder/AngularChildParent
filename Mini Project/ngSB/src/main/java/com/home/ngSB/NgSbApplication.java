package com.home.ngSB;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.home.controller," + "com.home.binding," + "com.home.services")
public class NgSbApplication {

	public static void main(String[] args) {
		SpringApplication.run(NgSbApplication.class, args);
	}
}
