package com.oficinabr.rail.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.dto.TestDTO;
import com.oficinabr.rail.entity.Test;
import com.oficinabr.rail.report.TestReportDTO;
import com.oficinabr.rail.repository.TestRepository;

@Service
public class ReportService {
	
	@Autowired
	private TestRepository repository;
	

	public ResponseEntity<TestReportDTO> getReportByServiceOrder(String serviceOrder) {	
		
		try {
			
			TestReportDTO reportByServiceOrder = new TestReportDTO();

			List<Test> testList = repository.findByServiceOrder(serviceOrder);	
			Integer injectorQuantity = getInjectorQuantity(testList);
			Map<Integer, List<Test>> groupedByInjectorNumber = getGroupedByInjectorNumber(testList);
			List<TestDTO> filteredByLastSequence = getByLastSequence(groupedByInjectorNumber);		
			
			reportByServiceOrder.setServiceOrder(serviceOrder);
			reportByServiceOrder.setCustomerName(filteredByLastSequence.get(0).customerName());			
			reportByServiceOrder.setInjectorType(filteredByLastSequence.get(0).injectorType());
			reportByServiceOrder.setVehiclePlate(filteredByLastSequence.get(0).vehiclePlate());
			reportByServiceOrder.setInjectorModel(filteredByLastSequence.get(0).injectorModel());
			reportByServiceOrder.setInjectorQuantity(injectorQuantity);
			reportByServiceOrder.setTestList(filteredByLastSequence);
			
			return ResponseEntity.ok(reportByServiceOrder);
	
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
	
	public ResponseEntity<TestReportDTO> getReportByInjectorNumber(String serviceOrder, Integer injectorNumber) {	
		
		try {
			
			TestReportDTO reportByInjectorNumber = new TestReportDTO();

			List<TestDTO> testList = repository.findByServiceOrderAndInjectorNumber(serviceOrder, injectorNumber).stream().map(TestDTO::new).toList();	
		
			
			reportByInjectorNumber.setServiceOrder(testList.get(0).serviceOrder());
			reportByInjectorNumber.setCustomerName(testList.get(0).customerName());			
			reportByInjectorNumber.setInjectorType(testList.get(0).injectorType());
			reportByInjectorNumber.setVehiclePlate(testList.get(0).vehiclePlate());
			reportByInjectorNumber.setInjectorModel(testList.get(0).injectorModel());
			reportByInjectorNumber.setInjectorQuantity(1);
			reportByInjectorNumber.setTestList(testList);
			
			return ResponseEntity.ok(reportByInjectorNumber);
	
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}



	private Integer getInjectorQuantity(List<Test> testList) {
		Integer injectorQuantity = testList.stream().collect(Collectors.groupingBy(t -> t.getInjectorNumber())).values().size();
		return injectorQuantity;
	}


	private Map<Integer, List<Test>> getGroupedByInjectorNumber(List<Test> testList) {
		Map<Integer, List<Test>> groupedByInjectorNumber = testList.stream().collect(Collectors.groupingBy(t -> t.getInjectorNumber()));
		return groupedByInjectorNumber;
	}


	private List<TestDTO> getByLastSequence(Map<Integer, List<Test>> groupedByInjectorNumber) {
		List<TestDTO> filteredByLastSequence = new ArrayList<>();

		groupedByInjectorNumber.entrySet().forEach(g -> {
			filteredByLastSequence
				.add(new TestDTO(g.getValue().stream()
					.max((a, b) -> Integer.compare(a.getSequence(), b.getSequence())).get()));
		});
		return filteredByLastSequence;
	}
}

