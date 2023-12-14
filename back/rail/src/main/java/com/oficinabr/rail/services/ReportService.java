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
	
	/*
	 	try {
			PlanDTO resp = repository.findById(id).stream().map(PlanDTO::new).findAny().get();
			return ResponseEntity.ok(resp);
		} catch (Exception e) {
			return ResponseEntity.noContent().build();
		}
	 */

	public ResponseEntity<TestReportDTO> getReportByServiceOrder(String serviceOrder) {	
		
		try {
//			TestReportDTO resp = repository.findById(id).stream().map(TestReportDTO::new).findAny().get();
//			return ResponseEntity.ok(resp);
			
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

//JRBeanCollectionDataSource beanColletionDataSource = new JRBeanCollectionDataSource(testList);
//
//	InputStream reportFile = getClass().getResourceAsStream("/reports/testReport.jrxml");
//	JasperReport compileReport = JasperCompileManager.compileReport(reportFile);
//	
//	Map<String, Object> map = new HashMap<>();
//	JasperPrint report = JasperFillManager.fillReport(compileReport, map, beanColletionDataSource);
//	
//	byte[] data = JasperExportManager.exportReportToPdf(report);
//	
//	HttpHeaders headers = new HttpHeaders();
//	headers.set(HttpHeaders.CONTENT_DISPOSITION, "inline;filename=report.pdf");		
//	return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF).body(data);
