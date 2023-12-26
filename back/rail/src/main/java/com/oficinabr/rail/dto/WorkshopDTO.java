package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Workshop;

public record WorkshopDTO(String id, String name, String description) {
	
	public WorkshopDTO(Workshop workshop) {
		this(workshop.getId(), workshop.getName(), workshop.getDescription());
	}
}
