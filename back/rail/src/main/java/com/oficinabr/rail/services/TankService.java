package com.oficinabr.rail.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.TankDTO;
import com.oficinabr.rail.entity.Tank;
import com.oficinabr.rail.repository.TankRepository;

@Service
public class TankService {
	@Autowired
	private TankRepository repository;
	
	public ResponseEntity<List<TankDTO> > getAll() {
	
		try {
			List<TankDTO> resp = repository.findAll().stream().map(TankDTO::new).toList();		
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public Tank findByFuel(String fuel) {
		return repository.findByFuel(fuel);
	}
	
	public Tank findById(Long id) {
		return repository.findById(id).get();
	}
}
