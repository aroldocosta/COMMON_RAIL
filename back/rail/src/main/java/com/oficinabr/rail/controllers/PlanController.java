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

import com.oficinabr.rail.dto.PlanDTO;
import com.oficinabr.rail.entity.Workshop;
import com.oficinabr.rail.services.PlanService;

@RestController
@RequestMapping("plans")
public class PlanController {
	@Autowired
	private PlanService service; 
	
	@GetMapping()												
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<List<PlanDTO>> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/workshop/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<List<PlanDTO>> findByWorkshop(@PathVariable("id") String id) {
		return Workshop.ADMIN_WORKSHOP.equals(id) 
				? service.findAll()
				: service.findByWorkshop(id);
	}
	
	@GetMapping(value = "/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<PlanDTO> find(@PathVariable("id") String id) {
		return service.find(id);
	}
	
	@PostMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
	public ResponseEntity<PlanDTO> save(@RequestBody PlanDTO dto) {
		return service.save(dto);
	}
	
	@PutMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.PUT)
	public ResponseEntity<PlanDTO> update(@RequestBody PlanDTO dto) {
		return service.update(dto);
	}
	
	@DeleteMapping(value = "/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.DELETE)
	public ResponseEntity<PlanDTO> delete(@PathVariable("id") String id) {
		return service.delete(id);
	}
}
