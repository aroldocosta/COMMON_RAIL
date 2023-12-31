package com.oficinabr.rail.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.oficinabr.rail.dto.AuthenticationDTO;
import com.oficinabr.rail.dto.LoginDTO;
import com.oficinabr.rail.entity.User;
import com.oficinabr.rail.entity.infra.security.TokenService;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
	@Autowired
	private TokenService tokenService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/login")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
	public ResponseEntity<LoginDTO> login(@RequestBody AuthenticationDTO dto) {

		var usernamePassword = new UsernamePasswordAuthenticationToken(dto.login(), dto.password());
		var auth = authenticationManager.authenticate(usernamePassword);
		var token = tokenService.generateToken((User) auth.getPrincipal());
		var userId = ((User) auth.getPrincipal()).getId();

		return ResponseEntity.ok(new LoginDTO(userId, token));
	}
}
