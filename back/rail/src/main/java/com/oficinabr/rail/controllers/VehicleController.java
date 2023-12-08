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

import com.oficinabr.rail.dto.VehicleDTO;
import com.oficinabr.rail.services.VehicleService;

@RestController
@RequestMapping("vehicles")
public class VehicleController {
	
	@Autowired
	private VehicleService service;

	@GetMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<List<VehicleDTO>> getAll() {
		return service.getAll();
	}
	
	@GetMapping(value = "/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<VehicleDTO> get(@PathVariable("id") String id) {     
		return service.get(id);
	}
	
	@PostMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
	public ResponseEntity<VehicleDTO> save(@RequestBody VehicleDTO dto) {
		return service.save(dto);
	}
	
	@PutMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.PUT)
	public ResponseEntity<VehicleDTO> update(@RequestBody VehicleDTO dto) {
		return service.update(dto);
	}
	@DeleteMapping(value = "/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.DELETE)
	public ResponseEntity<VehicleDTO> delete(@PathVariable("id") String id) {
		return service.delete(id);
	}
	
	/*
	 	@GetMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<List<VehicleDTO> > getAll() {
		return service.getAll();
	}
	@GetMapping(value = "/{id}")	
	public ResponseEntity<VehicleDTO> get(@PathVariable("id") Long id) {     
		return service.get(id);
	}
	@PostMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
	public ResponseEntity<VehicleDTO> save(@RequestBody VehicleDTO dto) {
		return service.save(dto);
	}
	@PutMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.PUT)
	public ResponseEntity<VehicleDTO> update(@RequestBody VehicleDTO dto) {
		return service.update(dto);
	}
	@DeleteMapping(value = "{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.DELETE)
	public ResponseEntity<VehicleDTO> delete(@PathVariable("id") Long id) {
		return service.delete(id);
	}
	
	@GetMapping(value = "/totals")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<TotalsDTO> getTotals() {
		return service.totals();
	}
	
	*/
}
