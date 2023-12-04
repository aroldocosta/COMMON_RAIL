package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.User;
import com.oficinabr.rail.enums.UserRole;

public record UserDTO(String id, String name, String login, String password, UserRole role, String teste) {
	public UserDTO(User user) {
		this(
		user.getId(),		
		user.getName(), 
		user.getLogin(),
		user.getPassword(),
		user.getRole(), 
		"teste");
	}
}
