package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Test;

public record TestDTO(
		String id, 
		Integer injectorNumber, 
		Integer sequence, 
		String comments, 
		String description,
		String date, 
		Float starting,
		Float idling,
		Float halfLoad, 
		Float fullLoad, 
		Float preInjection, 
		Float halfLoadReturn, 
		Float fullLoadReturn,
		Float startingReturn,
		Float idlingReturn, 
		Float preInjectionReturn,
		String planId, 
		String injectorId, 
		String injectorType, 
		String injectorModel, 
		String vehicleId, 
		String vehiclePlate, 
		String imaCode,
		String serviceOrder, 
		String customerName, 
		Integer injectorQuantity, 
		PlanDTO plan, 
		WorkshopDTO workshop
	) {
	
		public TestDTO(Test test) {
			this(
				test.getId(), 
				test.getInjectorNumber(), 
				test.getSequence(), 
				test.getComments(), 
				test.getDescription(), 
				test.getDate(),
				test.getStarting(),
				test.getIdling(),
				test.getHalfLoad(), 
				test.getFullLoad(), 
				test.getPreInjection(), 
				test.getHalfLoadReturn(), 
				test.getFullLoadReturn(),
				test.getStartingReturn(),
				test.getIdlingReturn(),
				test.getPreInjectionReturn(), 
				test.getPlan().getId(), 
				test.getInjector().getId(), 
				test.getInjector().getPlan().getType(), 
				test.getInjector().getModel(),
				test.getVehicle().getId(), 
				test.getVehicle().getPlate(), 
				test.getImaCode(), 
				test.getServiceOrder(), 
				test.getCustomerName(), 
				1, 
				new PlanDTO(test.getPlan()),
				new WorkshopDTO(test.getWorkshop())
			);
	}
}
