package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Vehicle;

public record VehicleDTO(
		String id, 
		String plate, 
		String model, 
		String yearModel, 
		String owner, 
		WorkshopDTO workshop 
	) {
	public VehicleDTO(Vehicle vehicle) {
		this(
			vehicle.getId(), 
			vehicle.getPlate(), 
			vehicle.getModel(), 
			vehicle.getYearModel(),  
			vehicle.getOwner(),
			new WorkshopDTO(vehicle.getWorkshop())
		);
	}
}
