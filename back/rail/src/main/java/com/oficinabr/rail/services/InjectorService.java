package com.oficinabr.rail.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.InjectorDTO;
import com.oficinabr.rail.entity.Injector;
import com.oficinabr.rail.entity.Plan;
import com.oficinabr.rail.entity.Workshop;
import com.oficinabr.rail.repository.InjectorRepository;
import com.oficinabr.rail.repository.PlanRepository;
import com.oficinabr.rail.repository.WorkshopRepository;

@Service
public class InjectorService {

	@Autowired
	private InjectorRepository repository;
	
	@Autowired
	private PlanRepository planRepository;
	
	@Autowired
	private WorkshopRepository workshopRepository;

	
	public ResponseEntity<List<InjectorDTO>> findAll() {
		try {	
			List<InjectorDTO> resp = repository.findAll().stream().filter(i -> i.getPlan() != null).map(InjectorDTO::new).toList();		
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<List<InjectorDTO>> findByWorkshop(String id) {
		try {
			List<InjectorDTO> resp = repository.findByWorkshopId(id).stream().map(InjectorDTO::new).toList();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<InjectorDTO> find(String id) {	
		try {
			InjectorDTO resp = repository.findById(id).stream().map(InjectorDTO::new).findAny().get();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<List<InjectorDTO>> findByPlanId(String id) {
		try {
			List<InjectorDTO> resp = repository.findByPlanId(id).stream().map(InjectorDTO::new).toList();
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
			
			Workshop workshop = workshopRepository.findById(dto.workshop().id()).get();
			injector.setWorkshop(workshop);
			
			InjectorDTO resp = new InjectorDTO(repository.save(injector));
			return ResponseEntity.ok(resp);
		} catch(DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<InjectorDTO> update(InjectorDTO dto) {
		try {
			Injector injector = new Injector(dto);
			Plan plan = planRepository.findById(dto.planId()).get();
			injector.setPlan(plan);
			
			Workshop workshop = workshopRepository.findById(dto.workshop().id()).get();
			injector.setWorkshop(workshop);
			
			InjectorDTO resp = new InjectorDTO(repository.save(injector));
			return ResponseEntity.ok(resp);
		} catch(DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
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
