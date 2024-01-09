package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Injector;

public record InjectorDTO(
		String id, 
		String type, 
		String planId, 
		String planCode, 
		String model, 
		String description,
		WorkshopDTO workshop) {

	public InjectorDTO(Injector injector) {
		this(
			injector.getId(), 
			injector.getPlan().getType(), 
			injector.getPlan().getId(), 
			injector.getPlan().getCode(), 
			injector.getModel(), 
			injector.getDescription(),
			new WorkshopDTO(injector.getWorkshop())
		);
	}
}
