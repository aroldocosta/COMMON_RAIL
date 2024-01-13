package com.oficinabr.rail.entity;

import java.util.List;

import com.oficinabr.rail.dto.PlanDTO;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Table(name = "plan")
@Entity(name = "plan")
public class Plan {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;
	
	@Column(name = "code")
	private String code;
	
	@Column(name = "type")
	private String type;

	@Column(name = "description")
	private String description;
	
	@OneToMany(mappedBy = "plan", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Test> testList;
	
	@OneToMany(mappedBy = "plan", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Injector> injectorList;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "workshop_id")
	private Workshop workshop;


	//------------------------------
	
	@Column(name = "max_starting")
	private Float maxStarting;
	
	@Column(name = "min_starting")
	private Float minStarting;
	
	@Column(name = "max_starting_return")
	private Float maxStartingReturn;
	
	@Column(name = "min_starting_return")
	private Float minStartingReturn;
	
	@Column(name = "starting_pressure")
	private Float startingPressure;
	
	@Column(name = "starting_bench_rpm")
	private Float startingBenchRpm;
	
	@Column(name = "starting_pulse_time")
	private Float startingPulseTime;
	
	@Column(name = "starting_frequency")
	private Float startingFrequency;
	
	//------------------------------
	
	@Column(name = "max_idling")
	private Float maxIdling;
	
	@Column(name = "min_idling")
	private Float minIdling;
	
	@Column(name = "max_idling_return")
	private Float maxIdlingReturn;
	
	@Column(name = "min_idling_return")
	private Float minIdlingReturn;
	
	@Column(name = "idling_pressure")
	private Float idlingPressure;
	
	@Column(name = "idling_bench_rpm")
	private Float idlingBenchRpm;
	
	@Column(name = "idling_pulse_time")
	private Float idlingPulseTime;
	
	@Column(name = "idling_frequency")
	private Float idlingFrequency;
	
	//-----------------------------
	
	@Column(name = "max_half_load")
	private Float maxHalfLoad;
	
	@Column(name = "min_half_load")
	private Float minHalfLoad;
	
	@Column(name = "max_half_load_return")
	private Float maxHalfLoadReturn;
	
	@Column(name = "min_half_load_return")
	private Float minHalfLoadReturn;
	
	@Column(name = "half_load_pressure")
	private Float halfLoadPressure;
	
	@Column(name = "half_load_bench_rpm")
	private Float halfLoadBenchRpm;
	
	@Column(name = "half_load_pulse_time")
	private Float halfLoadPulseTime;
	
	@Column(name = "half_load_frequency")
	private Float halfLoadFrequency;
	
	//------------------------------
	
	@Column(name = "max_full_load")
	private Float maxFullLoad;
	
	@Column(name = "min_full_load")
	private Float minFullLoad;
	
	@Column(name = "max_full_load_return")
	private Float maxFullLoadReturn;
	
	@Column(name = "min_full_load_return")
	private Float minFullLoadReturn;
	
	@Column(name = "full_load_pressure")
	private Float fullLoadPressure;
	
	@Column(name = "full_load_bench_rpm")
	private Float fullLoadBenchRpm;
	
	@Column(name = "full_load_pulse_time")
	private Float fullLoadPulseTime;
	
	@Column(name = "full_load_frequency")
	private Float fullLoadFrequency;
	
	//-----------------------------
	
	@Column(name = "max_pre_injection")
    private Float maxPreInjection;

	@Column(name = "min_pre_injection")
    private Float minPreInjection;
	
	@Column(name = "max_pre_injection_return")
    private Float maxPreInjectionReturn;

	@Column(name = "min_pre_injection_return")
    private Float minPreInjectionReturn;
	
	@Column(name = "pre_injection_pressure")
    private Float preInjectionPressure;
	
	@Column(name = "pre_injection_bench_rpm")
	private Float preInjectionBenchRpm;
	
	@Column(name = "pre_injection_pulse_time")
	private Float preInjectionPulseTime;
	
	@Column(name = "pre_injection_frequency")
	private Float preInjectionFrequency;
	//----------------------------
	
	public Plan() {
		
	}
	
	public Plan(PlanDTO dto) {
		this.setId(dto.id());
		this.setCode(dto.code());
		this.setType(dto.type());
		this.setDescription(dto.description());
		this.setMaxHalfLoad(dto.maxHalfLoad());
		this.setMinHalfLoad(dto.minHalfLoad());
		this.setHalfLoadPressure(dto.halfLoadPressure());
		this.setMaxFullLoad(dto.maxFullLoad());
		this.setMinFullLoad(dto.minFullLoad());
		this.setFullLoadPressure(dto.fullLoadPressure());
		this.setMaxIdling(dto.maxIdling());
		this.setMinIdling(dto.minIdling());
		this.setIdlingPressure(dto.idlingPressure());
		this.setMaxPreInjection(dto.maxPreInjection());
		this.setMinPreInjection(dto.minPreInjection());
		this.setPreInjectionPressure(dto.preInjectionPressure());
		this.setMaxHalfLoadReturn(dto.maxHalfLoadReturn());
		this.setMinHalfLoadReturn(dto.minHalfLoadReturn());
		this.setMaxFullLoadReturn(dto.maxFullLoadReturn());
		this.setMinFullLoadReturn(dto.minFullLoadReturn());
		this.setMaxIdlingReturn(dto.maxIdlingReturn());
		this.setMinIdlingReturn(dto.minIdlingReturn());
		this.setMaxPreInjectionReturn(dto.maxPreInjectionReturn());
		this.setMinPreInjectionReturn(dto.minPreInjectionReturn());
		this.setHalfLoadBenchRpm(dto.halfLoadBenchRpm());
		this.setHalfLoadPulseTime(dto.halfLoadPulseTime());
		this.setHalfLoadFrequency(dto.halfLoadFrequency());		
		this.setFullLoadBenchRpm(dto.fullLoadBenchRpm());
		this.setFullLoadPulseTime(dto.fullLoadPulseTime());
		this.setFullLoadFrequency(dto.fullLoadFrequency());
		this.setIdlingBenchRpm(dto.idlingBenchRpm());
		this.setIdlingPulseTime(dto.idlingPulseTime());
		this.setIdlingFrequency(dto.idlingFrequency());
		this.setPreInjectionBenchRpm(dto.preInjectionBenchRpm());
		this.setPreInjectionPulseTime(dto.preInjectionPulseTime());
		this.setPreInjectionFrequency(dto.preInjectionFrequency());
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Test> getTestList() {
		return testList;
	}
	public void setTestList(List<Test> testList) {
		this.testList = testList;
	}
	public Workshop getWorkshop() {
		return workshop;
	}

	public void setWorkshop(Workshop workshop) {
		this.workshop = workshop;
	}

	public List<Injector> getInjectorList() {
		return injectorList;
	}

	public void setInjectorList(List<Injector> injectorList) {
		this.injectorList = injectorList;
	}

	public Float getMaxStarting() {
		return maxStarting;
	}

	public void setMaxStarting(Float maxStarting) {
		this.maxStarting = maxStarting;
	}

	public Float getMinStarting() {
		return minStarting;
	}

	public void setMinStarting(Float minStarting) {
		this.minStarting = minStarting;
	}

	public Float getMaxStartingReturn() {
		return maxStartingReturn;
	}

	public void setMaxStartingReturn(Float maxStartingReturn) {
		this.maxStartingReturn = maxStartingReturn;
	}

	public Float getMinStartingReturn() {
		return minStartingReturn;
	}

	public void setMinStartingReturn(Float minStartingReturn) {
		this.minStartingReturn = minStartingReturn;
	}

	public Float getStartingPressure() {
		return startingPressure;
	}

	public void setStartingPressure(Float startingPressure) {
		this.startingPressure = startingPressure;
	}

	public Float getStartingBenchRpm() {
		return startingBenchRpm;
	}

	public void setStartingBenchRpm(Float startingBenchRpm) {
		this.startingBenchRpm = startingBenchRpm;
	}

	public Float getStartingPulseTime() {
		return startingPulseTime;
	}

	public void setStartingPulseTime(Float startingPulseTime) {
		this.startingPulseTime = startingPulseTime;
	}

	public Float getStartingFrequency() {
		return startingFrequency;
	}

	public void setStartingFrequency(Float startingFrequency) {
		this.startingFrequency = startingFrequency;
	}

	public Float getMaxHalfLoad() {
		return maxHalfLoad;
	}
	public void setMaxHalfLoad(Float maxHalfLoad) {
		this.maxHalfLoad = maxHalfLoad;
	}
	public Float getMinHalfLoad() {
		return minHalfLoad;
	}
	public void setMinHalfLoad(Float minHalfLoad) {
		this.minHalfLoad = minHalfLoad;
	}
	public Float getMaxFullLoad() {
		return maxFullLoad;
	}
	public void setMaxFullLoad(Float maxFullLoad) {
		this.maxFullLoad = maxFullLoad;
	}
	public Float getMinFullLoad() {
		return minFullLoad;
	}
	public void setMinFullLoad(Float minFullLoad) {
		this.minFullLoad = minFullLoad;
	}
	public Float getMaxIdling() {
		return maxIdling;
	}
	public void setMaxIdling(Float maxIdling) {
		this.maxIdling = maxIdling;
	}
	public Float getMinIdling() {
		return minIdling;
	}
	public void setMinIdling(Float minIdling) {
		this.minIdling = minIdling;
	}
	public Float getHalfLoadPressure() {
		return halfLoadPressure;
	}
	public void setHalfLoadPressure(Float halfLoadPressure) {
		this.halfLoadPressure = halfLoadPressure;
	}
	public Float getFullLoadPressure() {
		return fullLoadPressure;
	}
	public void setFullLoadPressure(Float fullLoadPressure) {
		this.fullLoadPressure = fullLoadPressure;
	}
	public Float getIdlingPressure() {
		return idlingPressure;
	}
	public void setIdlingPressure(Float idlingPressure) {
		this.idlingPressure = idlingPressure;
	}
	public Float getMaxPreInjection() {
		return maxPreInjection;
	}
	public void setMaxPreInjection(Float maxPreInjection) {
		this.maxPreInjection = maxPreInjection;
	}
	public Float getMinPreInjection() {
		return minPreInjection;
	}
	public void setMinPreInjection(Float minPreInjection) {
		this.minPreInjection = minPreInjection;
	}
	public Float getPreInjectionPressure() {
		return preInjectionPressure;
	}
	public void setPreInjectionPressure(Float preInjectionPressure) {
		this.preInjectionPressure = preInjectionPressure;
	}
	public Float getMaxHalfLoadReturn() {
		return maxHalfLoadReturn;
	}
	public void setMaxHalfLoadReturn(Float maxHalfLoadReturn) {
		this.maxHalfLoadReturn = maxHalfLoadReturn;
	}
	public Float getMinHalfLoadReturn() {
		return minHalfLoadReturn;
	}
	public void setMinHalfLoadReturn(Float minHalfLoadReturn) {
		this.minHalfLoadReturn = minHalfLoadReturn;
	}
	public Float getMaxFullLoadReturn() {
		return maxFullLoadReturn;
	}
	public void setMaxFullLoadReturn(Float maxFullLoadReturn) {
		this.maxFullLoadReturn = maxFullLoadReturn;
	}
	public Float getMinFullLoadReturn() {
		return minFullLoadReturn;
	}
	public void setMinFullLoadReturn(Float minFullLoadReturn) {
		this.minFullLoadReturn = minFullLoadReturn;
	}
	public Float getMaxIdlingReturn() {
		return maxIdlingReturn;
	}
	public void setMaxIdlingReturn(Float maxIdlingReturn) {
		this.maxIdlingReturn = maxIdlingReturn;
	}
	public Float getMinIdlingReturn() {
		return minIdlingReturn;
	}
	public void setMinIdlingReturn(Float minIdlingReturn) {
		this.minIdlingReturn = minIdlingReturn;
	}
	public Float getMaxPreInjectionReturn() {
		return maxPreInjectionReturn;
	}
	public void setMaxPreInjectionReturn(Float maxPreInjectionReturn) {
		this.maxPreInjectionReturn = maxPreInjectionReturn;
	}
	public Float getMinPreInjectionReturn() {
		return minPreInjectionReturn;
	}
	public void setMinPreInjectionReturn(Float minPreInjectionReturn) {
		this.minPreInjectionReturn = minPreInjectionReturn;
	}

	public Float getHalfLoadBenchRpm() {
		return halfLoadBenchRpm;
	}

	public void setHalfLoadBenchRpm(Float halfLoadBenchRpm) {
		this.halfLoadBenchRpm = halfLoadBenchRpm;
	}

	public Float getHalfLoadPulseTime() {
		return halfLoadPulseTime;
	}

	public void setHalfLoadPulseTime(Float halfLoadPulseTime) {
		this.halfLoadPulseTime = halfLoadPulseTime;
	}

	public Float getHalfLoadFrequency() {
		return halfLoadFrequency;
	}

	public void setHalfLoadFrequency(Float halfLoadFrequency) {
		this.halfLoadFrequency = halfLoadFrequency;
	}

	public Float getFullLoadBenchRpm() {
		return fullLoadBenchRpm;
	}

	public void setFullLoadBenchRpm(Float fullLoadBenchRpm) {
		this.fullLoadBenchRpm = fullLoadBenchRpm;
	}

	public Float getFullLoadPulseTime() {
		return fullLoadPulseTime;
	}

	public void setFullLoadPulseTime(Float fullLoadPulseTime) {
		this.fullLoadPulseTime = fullLoadPulseTime;
	}

	public Float getFullLoadFrequency() {
		return fullLoadFrequency;
	}

	public void setFullLoadFrequency(Float fullLoadFrequency) {
		this.fullLoadFrequency = fullLoadFrequency;
	}

	public Float getIdlingBenchRpm() {
		return idlingBenchRpm;
	}

	public void setIdlingBenchRpm(Float idlingBenchRpm) {
		this.idlingBenchRpm = idlingBenchRpm;
	}

	public Float getIdlingPulseTime() {
		return idlingPulseTime;
	}

	public void setIdlingPulseTime(Float idlingPulseTime) {
		this.idlingPulseTime = idlingPulseTime;
	}

	public Float getIdlingFrequency() {
		return idlingFrequency;
	}

	public void setIdlingFrequency(Float idlingFrequency) {
		this.idlingFrequency = idlingFrequency;
	}

	public Float getPreInjectionBenchRpm() {
		return preInjectionBenchRpm;
	}

	public void setPreInjectionBenchRpm(Float preInjectionBenchRpm) {
		this.preInjectionBenchRpm = preInjectionBenchRpm;
	}

	public Float getPreInjectionPulseTime() {
		return preInjectionPulseTime;
	}

	public void setPreInjectionPulseTime(Float preInjectionPulseTime) {
		this.preInjectionPulseTime = preInjectionPulseTime;
	}

	public Float getPreInjectionFrequency() {
		return preInjectionFrequency;
	}

	public void setPreInjectionFrequency(Float preInjectionFrequency) {
		this.preInjectionFrequency = preInjectionFrequency;
	}
}
