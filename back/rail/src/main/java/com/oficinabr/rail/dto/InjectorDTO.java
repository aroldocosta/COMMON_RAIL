package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Injector;

public record InjectorDTO(String id, String code, String type, String planId, String planCode, String model, String description) {

	public InjectorDTO(Injector i) {
		this(i.getId(), i.getCode(), i.getPlan().getType(), i.getPlan().getId(), i.getPlan().getCode(), i.getModel(), i.getDescription());
	}
}
