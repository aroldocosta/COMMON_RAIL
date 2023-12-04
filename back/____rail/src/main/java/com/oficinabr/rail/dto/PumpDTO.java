package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Pump;

public record PumpDTO(Long id, String name, String tank, String message) {

	public PumpDTO(Pump pump) {
		this(pump.getId(), pump.getName(), pump.getTank().getFuel(), "Ok");
	}
}
