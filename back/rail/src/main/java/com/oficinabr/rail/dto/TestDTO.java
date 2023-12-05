package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Test;

public record TestDTO(
		String id, 
		Integer injectorNumber, 
		Integer sequence, 
		String comments,
		String description,
		String date, 
		Float resistance, 
		Float inductance, 
		Float isolation,
		Float halfLoad,
		Float fullLoad, 
		Float idling, 
		Float preInjection, 
		Float halfLoadReturn, 
		Float fullLoadReturn,
		Float idlingReturn, 
		Float preInjectionReturn, 
		String planId, 
		String injectorId, 
		String injectorModel,
		String vehicleId, 
		String vehiclePlate, 
		String imaCode, 
		String serviceOrder

) {
	public TestDTO(Test t) {
		this(
		t.getId(), 
		t.getInjectorNumber(), 
		t.getSequence(), 
		t.getComments(), 
		t.getDescription(),
		t.getDate(), 
		t.getResistance(), 
		t.getInductance(), 
		t.getIsolation(),
		t.getHalfLoad(), 
		t.getFullLoad(), 
		t.getIdling(), 
		t.getPreInjection(), 
		t.getHalfLoadReturn(),
		t.getFullLoadReturn(), 
		t.getIdlingReturn(), 
		t.getPreInjectionReturn(), 
		t.getPlan().getId(),
		t.getInjector().getId(), 
		t.getInjector().getModel(), 
		t.getVehicle().getId(), 
		t.getVehicle().getPlate(),
		t.getImaCode(), 
		t.getServiceOrder());
	}

}
