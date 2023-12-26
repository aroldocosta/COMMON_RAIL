package com.oficinabr.rail.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.VehicleDTO;
import com.oficinabr.rail.entity.Vehicle;
import com.oficinabr.rail.repository.VehicleRepository;

@Service
public class VehicleService {

	@Autowired
	private VehicleRepository repository;

	public ResponseEntity<List<VehicleDTO>> getAll() {
		try {
			List<VehicleDTO> resp = repository.findAll().stream().map(VehicleDTO::new).toList();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<VehicleDTO> get(String id) {
		try {
			VehicleDTO resp = repository.findById(id).stream().map(VehicleDTO::new).findAny().get();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<VehicleDTO> save(VehicleDTO dto) {
		try {
			Vehicle v = new Vehicle(dto);
			VehicleDTO resp = new VehicleDTO(repository.save(v));
			return ResponseEntity.ok(resp);
		} catch(DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<VehicleDTO> update(VehicleDTO dto) {
		try {
//			Vehicle v = new Vehicle();
			Vehicle v = new Vehicle(dto);
			VehicleDTO resp = new VehicleDTO(repository.save(v));
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
