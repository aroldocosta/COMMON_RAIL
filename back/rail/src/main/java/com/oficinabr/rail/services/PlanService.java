package com.oficinabr.rail.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.PlanDTO;
import com.oficinabr.rail.entity.Plan;
import com.oficinabr.rail.repository.PlanRepository;

@Service
public class PlanService {
	@Autowired
	private PlanRepository repository;
	
	public ResponseEntity<List<PlanDTO>> getAll() {
		try {
			List<PlanDTO> resp = repository.findAll().stream().map(PlanDTO::new).toList();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<PlanDTO> get(String id) {			
		try {
			PlanDTO resp = repository.findById(id).stream().map(PlanDTO::new).findAny().get();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<PlanDTO> save(PlanDTO dto) {
		
		try {		
			Plan plan = new Plan(dto);			
			PlanDTO resp = new PlanDTO(repository.save(plan));
			return ResponseEntity.ok(resp);
		} catch(DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<PlanDTO> update(PlanDTO dto) {
		try {
			Plan plan = new Plan(dto);	
			PlanDTO resp = new PlanDTO(repository.save(plan));
			return ResponseEntity.ok(resp);
		} catch(DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<PlanDTO> delete(String id) {
		try {
			Plan plan = repository.findById(id).get();
			repository.delete(plan);
			return ResponseEntity.ok().build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		} 
	}
	
}
