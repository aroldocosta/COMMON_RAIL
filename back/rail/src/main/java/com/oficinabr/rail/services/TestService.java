package com.oficinabr.rail.services;

import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.TestDTO;
import com.oficinabr.rail.entity.Injector;
import com.oficinabr.rail.entity.Plan;
import com.oficinabr.rail.entity.Test;
import com.oficinabr.rail.entity.Vehicle;
import com.oficinabr.rail.repository.InjectorRepository;
import com.oficinabr.rail.repository.PlanRepository;
import com.oficinabr.rail.repository.TestRepository;
import com.oficinabr.rail.repository.VehicleRepository;

@Service
public class TestService {
	@Autowired
	private TestRepository repository;
	
	@Autowired
	private PlanRepository planRepository;

	@Autowired
	private VehicleRepository vehicleRepository;
	
	@Autowired
	private InjectorRepository injectorRepository;
	
	public ResponseEntity<List<TestDTO>> getAll() {
		try {
			List<TestDTO> resp = repository.findAll().stream().map(TestDTO::new).toList();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<TestDTO> get(String id) {
		try {
			TestDTO resp = repository.findById(id).stream().map(TestDTO::new).findAny().get();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<TestDTO> save(TestDTO dto) {
		try {
//			Test test = new Test(dto);
//			Plan plan  = planRepository.findById(dto.planId()).get();
//			Injector injector = injectorRepository.findById(dto.injectorId()).get();
//			Vehicle vehicle = vehicleRepository.findById(dto.vehicleId()).get();
//			test.setInjector(injector);
//			test.setVehicle(vehicle);
//			test.setPlan(plan);
			Test test = createTest(dto);	
			List<Test> testList = repository.findByInjector(test.getInjector());
			Test max = testList.stream().max(Comparator.comparing(Test::getSequence)).orElse(null);
			Long sequence = (max == null) ? 1 : max.getSequence() + 1;
			test.setSequence(sequence);
			System.out.println("Max Sequence: " + sequence);
			
			TestDTO resp = new TestDTO(repository.save(test));
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<TestDTO> update(TestDTO dto) {
		try {
			Test test = createTest(dto);
			TestDTO resp = new TestDTO(repository.save(test));
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
		
	}
	
	public ResponseEntity<TestDTO> delete(String id) {
		try {
			Test vehicle = repository.findById(id).get();
			repository.delete(vehicle);
			return ResponseEntity.ok(new TestDTO(vehicle));
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		} 
	}	
	
	private Test createTest(TestDTO dto) {
		Test test = new Test(dto);
		Plan plan  = planRepository.findById(dto.planId()).get();
		Injector injector = injectorRepository.findById(dto.injectorId()).get();
		Vehicle vehicle = vehicleRepository.findById(dto.vehicleId()).get();
		test.setInjector(injector);
		test.setVehicle(vehicle);
		test.setPlan(plan);
		return test;
	}
}
