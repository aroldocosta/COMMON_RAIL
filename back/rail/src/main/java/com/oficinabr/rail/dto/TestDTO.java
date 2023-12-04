package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Test;

public record TestDTO(String id, Long sequence, String date, Float resistance, Float inductance, Float isolation,
		Float halfLoad, Float fullLoad, Float idling, Float preInjection, Float halfLoadReturn, Float fullLoadReturn,
		Float idlingReturn, Float preInjectionReturn, String planId, String injectorId, String injectorCode,
		String vehicleId, String vehiclePlate, String imaCode, String serviceOrder

) {
	public TestDTO(Test t) {
		this(t.getId(), t.getSequence(), t.getDate(), t.getResistance(), t.getInductance(), t.getIsolation(),
				t.getHalfLoad(), t.getFullLoad(), t.getIdling(), t.getPreInjection(), t.getHalfLoadReturn(),
				t.getFullLoadReturn(), t.getIdlingReturn(), t.getPreInjectionReturn(), t.getPlan().getId(),
				t.getInjector().getId(), t.getInjector().getCode(), t.getVehicle().getId(), t.getVehicle().getPlate(),
				t.getImaCode(), t.getServiceOrder());
	}

}
