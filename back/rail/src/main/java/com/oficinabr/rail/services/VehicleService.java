package com.oficinabr.rail.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.VehicleDTO;
import com.oficinabr.rail.entity.User;
import com.oficinabr.rail.entity.Vehicle;
import com.oficinabr.rail.repository.UserRepository;
import com.oficinabr.rail.repository.VehicleRepository;

@Service
public class VehicleService {

	@Autowired
	private VehicleRepository repository;
	
	@Autowired
	private UserRepository userRepository;
	
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
			User owner = userRepository.findById(dto.ownerId()).get();
			v.setOwner(owner);
			VehicleDTO resp = new VehicleDTO(repository.save(v));
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<VehicleDTO> update(VehicleDTO dto) {
		try {
//			Vehicle v = new Vehicle();
			Vehicle v = new Vehicle(dto);
			User owner = userRepository.findById(dto.ownerId()).get();
			v.setOwner(owner);
			VehicleDTO resp = new VehicleDTO(repository.save(v));
			return ResponseEntity.ok(resp);
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
