package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Plan;

public record PlanDTO(
	String id,
	String code,
	String type,
	String description,
	Float maxResistance,
	Float minResistance,
	Float maxReactance,
	Float minReactance,
	Float maxIsolation,
	Float minIsolation,
	Float maxHalfLoad,
	Float minHalfLoad,
	Float halfLoadPressure,
	Float maxFullLoad,
	Float minFullLoad,
	Float fullLoadPressure,
	Float maxIdling,
	Float minIdling,
	Float idlingPressure,
	Float maxPreInjection,
	Float minPreInjection,
	Float preInjectionPressure,
	Float maxHalfLoadReturn,	
	Float minHalfLoadReturn,	
	Float maxFullLoadReturn,
	Float minFullLoadReturn,	
	Float maxIdlingReturn,	
	Float minIdlingReturn,
	Float maxPreInjectionReturn,
	Float minPreInjectionReturn, 
	Float halfLoadBenchRpm,
	Float halfLoadPulseTime,	
	Float halfLoadFrequency,
	Float fullLoadBenchRpm,
	Float fullLoadPulseTime,	
	Float fullLoadFrequency,
	Float idlingBenchRpm,
	Float idlingPulseTime,	
	Float idlingFrequency,
	Float preInjectionBenchRpm,
	Float preInjectionPulseTime,	
	Float preInjectionFrequency,
	
	WorkshopDTO workshop
	) {
	
	public PlanDTO(Plan plan) {
		this(
			plan.getId(),
			plan.getCode(),
			plan.getType(),
			plan.getDescription(),
			plan.getMaxResistance(),
			plan.getMinResistance(),
			plan.getMaxReactance(),
			plan.getMinReactance(),
			plan.getMaxIsolation(),
			plan.getMinIsolation(),
			plan.getMaxHalfLoad(),
			plan.getMinHalfLoad(),
			plan.getHalfLoadPressure(),
			plan.getMaxFullLoad(),
			plan.getMinFullLoad(),
			plan.getFullLoadPressure(),
			plan.getMaxIdling(),
			plan.getMinIdling(),
			plan.getIdlingPressure(),
			plan.getMaxPreInjection(),
			plan.getMinPreInjection(),
			plan.getPreInjectionPressure(),
			plan.getMaxHalfLoadReturn(),	
			plan.getMinHalfLoadReturn(),	
			plan.getMaxFullLoadReturn(),
			plan.getMinFullLoadReturn(),	
			plan.getMaxIdlingReturn(),	
			plan.getMinIdlingReturn(),
			plan.getMaxPreInjectionReturn(),
			plan.getMinPreInjectionReturn(),
			plan.getHalfLoadBenchRpm(),
			plan.getHalfLoadPulseTime(),
			plan.getHalfLoadFrequency(),
			plan.getFullLoadBenchRpm(),
			plan.getFullLoadPulseTime(),
			plan.getFullLoadFrequency(),
			plan.getIdlingBenchRpm(),
			plan.getIdlingPulseTime(),
			plan.getIdlingFrequency(),
			plan.getPreInjectionBenchRpm(),
			plan.getPreInjectionPulseTime(),
			plan.getPreInjectionFrequency(),
			new WorkshopDTO(plan.getWorkshop())
		);
	}
}

/*
		

	

	
	@Column(name = "max_pre_injection_return")
    private Float maxPreInjectionReturn;

	@Column(name = "min_pre_injection_return")
    private Float minPreInjectionReturn;
*/