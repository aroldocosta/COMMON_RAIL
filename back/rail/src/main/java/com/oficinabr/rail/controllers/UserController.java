package com.oficinabr.rail.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.oficinabr.rail.dto.UserDTO;
import com.oficinabr.rail.services.UserService;

@RestController
@RequestMapping("users")
public class UserController {

	@Autowired
	UserService service;
	
	@GetMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<List<UserDTO> > getAll() { 
		return service.getAll();
	}
	
	@GetMapping(value = "/{id}")	
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<UserDTO> get(@PathVariable("id") String id) {     
		return service.get(id);
	}
	
	@PostMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
	public ResponseEntity<UserDTO> save(@RequestBody UserDTO dto) {
		return service.save(dto);
	}
	
	@PutMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.PUT)
	public ResponseEntity<UserDTO> update(@RequestBody UserDTO dto) {
		return service.update(dto);
	}
	@DeleteMapping(value = "/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.DELETE)
	public ResponseEntity<UserDTO> delete(@PathVariable("id") String id) {
		return service.delete(id);
	}
}
