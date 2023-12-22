package com.oficinabr.rail.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.oficinabr.rail.entity.User;

public interface UserRepository extends JpaRepository<User, String> {
	public UserDetails findByLogin(String login);
	public List<User> findByWorkshopId(String id);	
}
