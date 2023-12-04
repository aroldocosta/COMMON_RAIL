package com.oficinabr.rail.dto;

import java.math.BigDecimal;

import com.oficinabr.rail.entity.Tank;

public record TankDTO(Long id, String name, String fuel, BigDecimal tax, BigDecimal unitPrice) {
	
	public TankDTO(Tank tank) {
		this(tank.getId(), tank.getName(), tank.getFuel(), tank.getTax(), tank.getUnitPrice());
	}
}
