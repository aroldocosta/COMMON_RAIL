package com.oficinabr.rail.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.InjectorDTO;
import com.oficinabr.rail.entity.Injector;
import com.oficinabr.rail.entity.Plan;
import com.oficinabr.rail.repository.InjectorRepository;
import com.oficinabr.rail.repository.PlanRepository;

@Service
public class InjectorService {

	@Autowired
	private InjectorRepository repository;
	
	@Autowired
	private PlanRepository planRepository;

	
	public ResponseEntity<List<InjectorDTO>> getAll() {
		try {
			List<InjectorDTO> resp = repository.findAll().stream().map(InjectorDTO::new).toList();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<InjectorDTO> get(String id) {	
		
		try {
			InjectorDTO resp = repository.findById(id).stream().map(InjectorDTO::new).findAny().get();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<InjectorDTO> save(InjectorDTO dto) {
		
		try {
			Injector injector = new Injector(dto);
			Plan plan = planRepository.findById(dto.planId()).get();
			injector.setPlan(plan);
			InjectorDTO resp = new InjectorDTO(repository.save(injector));
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<InjectorDTO> update(InjectorDTO dto) {
		try {
			Injector injector = new Injector(dto);
			InjectorDTO resp = new InjectorDTO(repository.save(injector));
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
		
	}
	
	public ResponseEntity<InjectorDTO> delete(String id) {
		try {
			Injector injector = repository.findById(id).get();
			repository.delete(injector);
			return ResponseEntity.ok(new InjectorDTO(injector));
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		} 
	}
}
