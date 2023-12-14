package com.oficinabr.rail.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oficinabr.rail.entity.Test;
import com.oficinabr.rail.report.TestReportDTO;
import com.oficinabr.rail.repository.TestRepository;

@Service
public class ReportService {
	
	@Autowired
	private TestRepository repository;
	

	public ResponseEntity<TestReportDTO> getReportByServiceOrder(String serviceOrder) {	
		
		try {
			
			TestReportDTO testReport = new TestReportDTO();

			List<Test> testList = repository.findByServiceOrder(serviceOrder);
			Integer injectorQuantity = testList.stream().collect(Collectors.groupingBy(t -> t.getInjectorNumber())).values().size();
			
			testReport.setServiceOrder(serviceOrder);
			testReport.setCustomerName(testList.get(0).getCustomerName());			
			testReport.setInjectorType(testList.get(0).getInjector().getPlan().getType());
			testReport.setVehiclePlate(testList.get(0).getVehicle().getPlate());
			testReport.setInjectorModel(testList.get(0).getInjector().getModel());
			testReport.setInjectorQuantity(injectorQuantity);
			
						
//			testReport.setTestList(testList);
			
			return ResponseEntity.ok(testReport);
	
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	}
}