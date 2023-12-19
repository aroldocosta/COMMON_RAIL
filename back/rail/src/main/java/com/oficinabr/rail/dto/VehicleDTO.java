package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Vehicle;

public record VehicleDTO(String id, String plate, String model, String yearModel, String owner ) {
	public VehicleDTO(Vehicle v) {
		this(v.getId(), v.getPlate(), v.getModel(), v.getYearModel(),  v.getOwner());
	}
}
