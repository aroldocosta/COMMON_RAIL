package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Plan;

public record PlanDTO(
	String id,
	String code,
	String type,
	String description,
	//--------------------------
	Float maxStarting,
	Float minStarting,
	Float maxStartingReturn,	
	Float minStartingReturn,
	Float startingPressure,
	Float startingBenchRpm,
	Float startingPulseTime,	
	Float startingFrequency,
	
	//--------------------------
	Float maxIdling,
	Float minIdling,
	Float maxIdlingReturn,	
	Float minIdlingReturn,
	Float idlingPressure,
	Float idlingBenchRpm,
	Float idlingPulseTime,	
	Float idlingFrequency,
	
	//-------------------------
	Float maxHalfLoad,
	Float minHalfLoad,
	Float maxHalfLoadReturn,	
	Float minHalfLoadReturn,
	Float halfLoadPressure,
	Float halfLoadBenchRpm,
	Float halfLoadPulseTime,	
	Float halfLoadFrequency,
	
	//-------------------------
	
	Float maxFullLoad,
	Float minFullLoad,
	Float maxFullLoadReturn,
	Float minFullLoadReturn,
	Float fullLoadPressure,
	Float fullLoadBenchRpm,
	Float fullLoadPulseTime,	
	Float fullLoadFrequency,
	
	//-------------------------

	Float maxPreInjection,
	Float minPreInjection,	
	Float maxPreInjectionReturn,
	Float minPreInjectionReturn, 
	Float preInjectionPressure,
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
			
			//-------------------------
			plan.getMaxStarting(),
			plan.getMinStarting(),
			plan.getMaxStartingReturn(),	
			plan.getMinStartingReturn(),
			plan.getStartingPressure(),
			plan.getStartingBenchRpm(),
			plan.getStartingPulseTime(),
			plan.getStartingFrequency(),
			
			//-------------------------
			
			plan.getMaxIdling(),
			plan.getMinIdling(),
			plan.getMaxIdlingReturn(),	
			plan.getMinIdlingReturn(),
			plan.getIdlingPressure(),
			plan.getIdlingBenchRpm(),
			plan.getIdlingPulseTime(),
			plan.getIdlingFrequency(),

			//-------------------------
			plan.getMaxHalfLoad(),
			plan.getMinHalfLoad(),
			plan.getMaxHalfLoadReturn(),	
			plan.getMinHalfLoadReturn(),
			plan.getHalfLoadPressure(),
			plan.getHalfLoadBenchRpm(),
			plan.getHalfLoadPulseTime(),
			plan.getHalfLoadFrequency(),
			
			//-------------------------
			plan.getMaxFullLoad(),
			plan.getMinFullLoad(),
			plan.getMaxFullLoadReturn(),
			plan.getMinFullLoadReturn(),
			plan.getFullLoadPressure(),
			plan.getFullLoadBenchRpm(),
			plan.getFullLoadPulseTime(),
			plan.getFullLoadFrequency(),
			
			//-------------------------
			
			plan.getMaxPreInjection(),
			plan.getMinPreInjection(),
			plan.getMaxPreInjectionReturn(),
			plan.getMinPreInjectionReturn(),
			plan.getPreInjectionPressure(),
			plan.getPreInjectionBenchRpm(),
			plan.getPreInjectionPulseTime(),
			plan.getPreInjectionFrequency(),
			
			new WorkshopDTO(plan.getWorkshop())
		);
	}
}
