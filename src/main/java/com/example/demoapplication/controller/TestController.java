package com.example.demoapplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/getTestData")
	public List<UserInfo> getTestData() {
		System.out.println(userRepository.getUserInfoByUserName("Jagadish"));
		System.out.println(userRepository.getUserTestById(4));
		System.out.println(userRepository.getDetaislByIdAndUserName(2, "Jagadish"));
		System.out.println(userRepository.getDetaislByIdOrUserName(2, "Jagadish"));
		System.out.println(userRepository.customFetchAllData());
		System.out.println(userRepository.customFetchAllDataOne(4));
		return userRepository.findAll();
	}
	
	@PostMapping("/createUser")
	public void createUser(@RequestBody UserInfo user) {
		userRepository.save(user);
	}

}
