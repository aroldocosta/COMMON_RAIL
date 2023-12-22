package com.oficinabr.rail.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.WorkshopDTO;
import com.oficinabr.rail.entity.Workshop;
import com.oficinabr.rail.repository.WorkshopRepository;

@Service
public class WorkshopService {
	@Autowired
	private WorkshopRepository repository;
		
	public ResponseEntity<List<WorkshopDTO> > getAll() {
		
		try {
			List<WorkshopDTO> resp = repository.findAll().stream().map(WorkshopDTO::new).toList();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<WorkshopDTO> get(String id) {	
		
		try {
			WorkshopDTO resp = repository.findById(id).stream().map(WorkshopDTO::new).findAny().get();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<WorkshopDTO> save(WorkshopDTO dto) {
		try {
			Workshop workshop = new Workshop(dto);
			WorkshopDTO resp = new WorkshopDTO(repository.save(workshop));	
		return ResponseEntity.ok(resp);	
		} catch(DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<WorkshopDTO> update(WorkshopDTO dto) {
		try {
			Workshop workshop = new Workshop(dto);
			WorkshopDTO resp = new WorkshopDTO(repository.save(workshop));
			return ResponseEntity.ok(resp);	
		} catch (DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<WorkshopDTO> delete(String id) {	
		try {
			Workshop workshop = repository.findById(id).get();
			repository.delete(workshop);
			return ResponseEntity.ok().build();
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}	
}
