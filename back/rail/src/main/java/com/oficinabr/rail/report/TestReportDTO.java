package com.oficinabr.rail.report;

import java.util.List;

import com.oficinabr.rail.dto.TestDTO;
import com.oficinabr.rail.entity.Test;

public class TestReportDTO {
	
	private String customerName;
	private String serviceOrder;
	private String vehiclePlate;
	private String injectorModel;	
	private String injectorType;
	private Integer injectorNumber;
	private Integer injectorQuantity;
	private List<TestDTO> testList;
	
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getServiceOrder() {
		return serviceOrder;
	}
	public void setServiceOrder(String serviceOrder) {
		this.serviceOrder = serviceOrder;
	}
	public String getVehiclePlate() {
		return vehiclePlate;
	}
	public void setVehiclePlate(String vehiclePlate) {
		this.vehiclePlate = vehiclePlate;
	}
	public String getInjectorModel() {
		return injectorModel;
	}
	public void setInjectorModel(String injectorModel) {
		this.injectorModel = injectorModel;
	}
	public String getInjectorType() {
		return injectorType;
	}
	public void setInjectorType(String injectorType) {
		this.injectorType = injectorType;
	}
	public Integer getInjectorNumber() {
		return injectorNumber;
	}
	public void setInjectorNumber(Integer injectorNumber) {
		this.injectorNumber = injectorNumber;
	}
	public Integer getInjectorQuantity() {
		return injectorQuantity;
	}
	public void setInjectorQuantity(Integer injectorQuantity) {
		this.injectorQuantity = injectorQuantity;
	}
	public List<TestDTO> getTestList() {
		return testList;
	}
	public void setTestList(List<TestDTO> testList) {
		this.testList = testList;
	}
}
