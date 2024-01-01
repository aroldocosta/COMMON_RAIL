package com.oficinabr.rail.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.VehicleDTO;
import com.oficinabr.rail.entity.Vehicle;
import com.oficinabr.rail.entity.Workshop;
import com.oficinabr.rail.repository.VehicleRepository;
import com.oficinabr.rail.repository.WorkshopRepository;

@Service
public class VehicleService {

	@Autowired
	private VehicleRepository repository;
	
	@Autowired
	private WorkshopRepository workshopRepository;

	public ResponseEntity<List<VehicleDTO>> findAll() {
		try {
			List<VehicleDTO> resp = repository.findAll().stream().map(VehicleDTO::new).toList();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<List<VehicleDTO>> findByWorkshop(String id) {
		try {
			List<VehicleDTO> resp = repository.findByWorkshopId(id).stream().map(VehicleDTO::new).toList();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<VehicleDTO> find(String id) {
		try {
			VehicleDTO resp = repository.findById(id).stream().map(VehicleDTO::new).findAny().get();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<VehicleDTO> save(VehicleDTO dto) {
		try {
			Vehicle vehicle = new Vehicle(dto);
			
			Workshop workshop = workshopRepository.findById(dto.workshop().id()).get();
			vehicle.setWorkshop(workshop);
			
			VehicleDTO resp = new VehicleDTO(repository.save(vehicle));
			return ResponseEntity.ok(resp);
		} catch(DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<VehicleDTO> update(VehicleDTO dto) {
		try {
			Vehicle vehicle = new Vehicle(dto);
			
			Workshop workshop = workshopRepository.findById(dto.workshop().id()).get();
			vehicle.setWorkshop(workshop);
			
			VehicleDTO resp = new VehicleDTO(repository.save(vehicle));
			return ResponseEntity.ok(resp);
		} catch(DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
		
	}
	
	public ResponseEntity<VehicleDTO> delete(String id) {
		try {
			Vehicle vehicle = repository.findById(id).get();
			repository.delete(vehicle);
			return ResponseEntity.ok(new VehicleDTO(vehicle));
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		} 
	}	
}
