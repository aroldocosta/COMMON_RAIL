package com.oficinabr.rail.controllers;

import java.io.FileNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;

import com.oficinabr.rail.report.TestReportDTO;
import com.oficinabr.rail.services.ReportService;

import net.sf.jasperreports.engine.JRException;

@Controller
public class ReportController {
	
	@Autowired
	private ReportService service;
	@GetMapping("/report/{serviceOrder}")
	@CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
	public ResponseEntity<TestReportDTO> getTestReportByServiceOrder(@PathVariable("serviceOrder") String serviceOrder) throws FileNotFoundException, JRException {
		return service.getReportByServiceOrder(serviceOrder);
	}
}
