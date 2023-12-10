package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Injector;

public record InjectorDTO(
		String id, 
		String code, 
		String type, 
		String planId, 
		String planCode, 
		String model, 
		String description) {

	public InjectorDTO(Injector injector) {
		this(
			injector.getId(), 
			injector.getCode(), 
			injector.getPlan().getType(), 
			injector.getPlan().getId(), 
			injector.getPlan().getCode(), 
			injector.getModel(), 
			injector.getDescription());
	}
}
