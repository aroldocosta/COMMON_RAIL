package com.oficinabr.rail.controllers;

import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;

import com.oficinabr.rail.entity.Test;
import com.oficinabr.rail.repository.TestRepository;

import jakarta.websocket.server.PathParam;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Controller
public class ReportController {
	
	@Autowired
	private TestRepository repository;
	//@PathVariable("id")
	@GetMapping("/report/{serviceOrder}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<byte[]> generateTestReportByServiceOrder(@PathVariable("serviceOrder") String serviceOrder) throws FileNotFoundException, JRException {
	
		List<Test> testList = repository.findByServiceOrder(serviceOrder);

		JRBeanCollectionDataSource beanColletionDataSource = new JRBeanCollectionDataSource(testList);

		InputStream reportFile = getClass().getResourceAsStream("/reports/testReport.jrxml");
		JasperReport compileReport = JasperCompileManager.compileReport(reportFile);
		
		Map<String, Object> map = new HashMap<>();
		JasperPrint report = JasperFillManager.fillReport(compileReport, map, beanColletionDataSource);
		
		byte[] data = JasperExportManager.exportReportToPdf(report);
		
		HttpHeaders headers = new HttpHeaders();
		headers.set(HttpHeaders.CONTENT_DISPOSITION, "inline;filename=report.pdf");		
		return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF).body(data);
	}
}
