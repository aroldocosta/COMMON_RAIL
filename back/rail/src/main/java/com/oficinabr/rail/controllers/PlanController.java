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

import com.oficinabr.rail.dto.FuelingDTO;
import com.oficinabr.rail.dto.PlanDTO;
import com.oficinabr.rail.dto.TotalsDTO;
import com.oficinabr.rail.services.PlanService;

@RestController
@RequestMapping("plans")
public class PlanController {
	@Autowired
	private PlanService service; 
	
	@GetMapping()												
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<List<PlanDTO>> getAll() {
		return service.getAll();
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<PlanDTO> get(@PathVariable("id") String id) {
		return service.get(id);
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
