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

import com.oficinabr.rail.dto.InjectorDTO;
import com.oficinabr.rail.entity.Workshop;
import com.oficinabr.rail.services.InjectorService;

@RestController  
@RequestMapping("injectors")
public class InjectorController {
	
	@Autowired
	private InjectorService service; 
	
	@GetMapping()												
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<List<InjectorDTO>> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/workshop/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<List<InjectorDTO>> findByWorkshop(@PathVariable("id") String id) {
		return Workshop.ADMIN_WORKSHOP.equals(id) 
				? service.findAll()
				: service.findByWorkshop(id);
	}
	
	@GetMapping(value = "/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<InjectorDTO> find(@PathVariable("id") String id) {
		return service.find(id);
	}
	@GetMapping(value = "/plan/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<List<InjectorDTO>> findByPlanId(@PathVariable("id") String id) {
		return service.findByPlanId(id);
	}
	@PostMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
	public ResponseEntity<InjectorDTO> save(@RequestBody InjectorDTO dto) {
		return service.save(dto);
	}
	@PutMapping()
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.PUT)
	public ResponseEntity<InjectorDTO> update(@RequestBody InjectorDTO dto) {
		return service.update(dto);
	}
	@DeleteMapping(value = "/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.DELETE)
	public ResponseEntity<InjectorDTO> delete(@PathVariable("id") String id) {
		return service.delete(id);
	}
}
