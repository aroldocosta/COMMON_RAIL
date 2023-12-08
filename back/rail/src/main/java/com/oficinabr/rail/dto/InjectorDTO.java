package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Injector;

public record InjectorDTO(String id, String code, String type, String model, String description) {

	public InjectorDTO(Injector i) {
		this(i.getId(), i.getCode(), i.getType(), i.getModel(), i.getDescription());
	}
}
