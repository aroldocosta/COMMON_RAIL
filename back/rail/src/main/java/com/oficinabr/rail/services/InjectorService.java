package com.oficinabr.rail.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.InjectorDTO;
import com.oficinabr.rail.entity.Injector;
import com.oficinabr.rail.repository.InjectorRepository;

@Service
public class InjectorService {

	@Autowired
	private InjectorRepository repository;

	
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
			Injector i = new Injector(dto);
//			i.setCode(dto.code());
//			i.setModel(dto.model());
//			i.setDescription(dto.description());
//			i.setTestList(new ArrayList<Test>());
			InjectorDTO resp = new InjectorDTO(repository.save(i));
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<InjectorDTO> update(InjectorDTO dto) {
		try {
			Injector v = new Injector(dto);
			InjectorDTO resp = new InjectorDTO(repository.save(v));
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
		
	}
	
	public ResponseEntity<InjectorDTO> delete(String id) {
		try {
			Injector vehicle = repository.findById(id).get();
			repository.delete(vehicle);
			return ResponseEntity.ok(new InjectorDTO(vehicle));
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		} 
	}
}
