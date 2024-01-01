package com.oficinabr.rail.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.UserDTO;
import com.oficinabr.rail.dto.WorkshopDTO;
import com.oficinabr.rail.entity.User;
import com.oficinabr.rail.entity.Workshop;
import com.oficinabr.rail.entity.infra.security.SecurityConfiguration;
import com.oficinabr.rail.repository.UserRepository;
import com.oficinabr.rail.repository.WorkshopRepository;

@Service
public class UserService {
	

	@Autowired
	private UserRepository repository;
	
	@Autowired
	private WorkshopRepository workshopRepository;
	
	@Autowired
	SecurityConfiguration security;
	
	public ResponseEntity<List<UserDTO> > findAll() {
		
		try {
			List<UserDTO> resp = repository.findAll().stream().map(UserDTO::new).toList();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<UserDTO> find(String id) {	
		
		try {
			UserDTO resp = repository.findById(id).stream().map(UserDTO::new).findAny().get();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<UserDTO> save(UserDTO dto) {
		try {
			User user = new User(dto);
			String encryptedPass = security.passwordEncoder().encode(dto.password());
			user.setPassword(encryptedPass);
			
			Workshop workshop = workshopRepository.findById(dto.workshop().id()).get();
			user.setWorkshop(workshop);
			
			UserDTO resp = new UserDTO(repository.save(user));	
		return ResponseEntity.ok(resp);	
		} catch(DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<UserDTO> update(UserDTO dto) {
		try {

			User user = new User(dto);

			if(!dto.password().equals(user.getPassword())) {
				String encryptedPass = security.passwordEncoder().encode(dto.password());
				user.setPassword(encryptedPass);				
			}
			
			Workshop workshop = workshopRepository.findById(dto.workshop().id()).get();
			user.setWorkshop(workshop);
			
			UserDTO resp = new UserDTO(repository.save(user));
			return ResponseEntity.ok(resp);	
		} catch (DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<UserDTO> delete(String id) {	
		try {
			User user = repository.findById(id).get();
			repository.delete(user);
			return ResponseEntity.ok().build();
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}
	
	public ResponseEntity<List<UserDTO>> findByWorkshop(String id) {
		try {
			List<UserDTO> resp = repository.findByWorkshopId(id).stream().map(UserDTO::new).toList();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<WorkshopDTO> findWorkshop(String id) {
		try {
			WorkshopDTO resp = new WorkshopDTO(repository.findById(id).get().getWorkshop());
			return ResponseEntity.ok(resp);
		} catch (DataIntegrityViolationException e) {
			return ResponseEntity.status(HttpStatusCode.valueOf(409)).build();
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
}
