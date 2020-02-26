package com.example.demoapplication.controller;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<UserInfo, Integer>{
	public UserInfo getUserInfoByUserName(String userName);
	public UserInfo getUserTestById(Integer id);
	public UserInfo getDetaislByIdAndUserName(Integer id, String userName);
	public UserInfo getDetaislByIdOrUserName(Integer id, String userName);
	
	@Query("from UserInfo u")
	public List<UserInfo> customFetchAllData();
	@Query("from UserInfo u where u.id = :id ")
	public UserInfo customFetchAllDataOne(@Param("id") Integer id);
	
}
