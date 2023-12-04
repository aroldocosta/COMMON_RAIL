package com.oficinabr.rail.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.oficinabr.rail.dto.PumpDTO;
import com.oficinabr.rail.services.PumpService;

@RestController
@RequestMapping("pumps")
public class PumpController {

	@Autowired
	private PumpService service;
	
	@GetMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<List<PumpDTO> > getAll() {
		return service.getAll();
	}
	@GetMapping(value = "/{id}")	
	public ResponseEntity<PumpDTO> get(@PathVariable("id") Long id) {     
		return service.get(id);
	}

}
