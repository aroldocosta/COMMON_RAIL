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

import com.oficinabr.rail.dto.WorkshopDTO;
import com.oficinabr.rail.services.WorkshopService;

@RestController
@RequestMapping("workshops")
public class WorkshopController {

	@Autowired
	WorkshopService service;
	
	@GetMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<List<WorkshopDTO> > findAll() { 
		return service.findAll();
	}
	
	@GetMapping(value = "/{id}")	
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<WorkshopDTO> find(@PathVariable("id") String id) {     
		return service.find(id);
	}
	
	@PostMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
	public ResponseEntity<WorkshopDTO> save(@RequestBody WorkshopDTO dto) {
		return service.save(dto);
	}
	
	@PutMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.PUT)
	public ResponseEntity<WorkshopDTO> update(@RequestBody WorkshopDTO dto) {
		return service.update(dto);
	}
	@DeleteMapping(value = "/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.DELETE)
	public ResponseEntity<WorkshopDTO> delete(@PathVariable("id") String id) {
		return service.delete(id);
	}
}
