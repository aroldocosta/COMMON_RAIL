package com.oficinabr.rail.controllers;

import java.io.FileNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.oficinabr.rail.report.TestReportDTO;
import com.oficinabr.rail.services.ReportService;

import net.sf.jasperreports.engine.JRException;

@Controller
@RequestMapping("reports")
public class ReportController {
	
	@Autowired
	private ReportService service;
	
	@GetMapping("/service-order/{serviceOrder}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<TestReportDTO> getTestReportByServiceOrder(@PathVariable("serviceOrder") String serviceOrder) throws FileNotFoundException, JRException {
		return service.getReportByServiceOrder(serviceOrder);
	}
	
	@GetMapping("/service-order/{serviceOrder}/injector-number/{injectorNumber}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<TestReportDTO> getTestReportByInjectorNumber(@PathVariable("serviceOrder") String serviceOrder, @PathVariable("injectorNumber") Integer injectorNumber) throws FileNotFoundException, JRException {
		return service.getReportByInjectorNumber(serviceOrder, injectorNumber);
	}
}
