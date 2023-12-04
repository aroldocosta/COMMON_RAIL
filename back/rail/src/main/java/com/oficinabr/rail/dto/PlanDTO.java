package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Plan;

public record PlanDTO(
	String id,
	String type,
	String code,
	String description,
	Float maxResistance,
	Float minResistance,
	Float maxInductance,
	Float minInductance,
	Float maxIsolation,
	Float minIsolation,
	Float maxHalfLoad,
	Float minHalfLoad,
	Float halfLoadPression,
	Float maxFullLoad,
	Float minFullLoad,
	Float fullLoadPression,
	Float maxIdling,
	Float minIdling,
	Float idlingPression,
	Float maxPreInjection,
	Float minPreInjection,
	Float preInjectionPression,
	Float maxHalfLoadReturn,	
	Float minHalfLoadReturn,	
	Float maxFullLoadReturn,
	Float minFullLoadReturn,	
	Float maxIdlingReturn,	
	Float minIdlingReturn,
	Float maxPreInjectionReturn,
	Float minPreInjectionReturn
	) {
	
	public PlanDTO(Plan p) {
		this(
			p.getId(),
			p.getType(),
			p.getCode(),
			p.getDescription(),
			p.getMaxResistance(),
			p.getMinResistance(),
			p.getMaxInductance(),
			p.getMinInductance(),
			p.getMaxIsolation(),
			p.getMinIsolation(),
			p.getMaxHalfLoad(),
			p.getMinHalfLoad(),
			p.getHalfLoadPression(),
			p.getMaxFullLoad(),
			p.getMinFullLoad(),
			p.getFullLoadPression(),
			p.getMaxIdling(),
			p.getMinIdling(),
			p.getIdlingPression(),
			p.getMaxPreInjection(),
			p.getMinPreInjection(),
			p.getPreInjectionPression(),
			p.getMaxHalfLoadReturn(),	
			p.getMinHalfLoadReturn(),	
			p.getMaxFullLoadReturn(),
			p.getMinFullLoadReturn(),	
			p.getMaxIdlingReturn(),	
			p.getMinIdlingReturn(),
			p.getMaxPreInjectionReturn(),
			p.getMinPreInjectionReturn()
		);
	}
}

/*
		

	

	
	@Column(name = "max_pre_injection_return")
    private Float maxPreInjectionReturn;

	@Column(name = "min_pre_injection_return")
    private Float minPreInjectionReturn;
*/