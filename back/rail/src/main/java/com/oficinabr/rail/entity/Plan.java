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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Table(name = "plan")
@Entity(name = "plan")
public class Plan {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;
	
	@Column(name = "type")
	private String type;
	
	@Column(name = "code")
	private String code;

	@Column(name = "description")
	private String description;
	
	@OneToMany(mappedBy = "plan", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Test> testList;
	
	@Column(name = "max_resistance")
	private Float maxResistance;
	
	@Column(name = "min_resistance")
	private Float minResistance;
	
	@Column(name = "max_inductance")
	private Float maxInductance;
	
	@Column(name = "min_inductance")
	private Float minInductance;
	
	@Column(name = "max_isolation")
	private Float maxIsolation;
	
	@Column(name = "min_isolation")
	private Float minIsolation;
	
	@Column(name = "max_half_load")
	private Float maxHalfLoad;
	
	@Column(name = "min_half_load")
	private Float minHalfLoad;
	
	@Column(name = "half_load_pressure")
	private Float halfLoadPressure;
	
	@Column(name = "max_full_load")
	private Float maxFullLoad;
	
	@Column(name = "min_full_load")
	private Float minFullLoad;
	
	@Column(name = "full_load_pressure")
	private Float fullLoadPressure;
	
	@Column(name = "max_idling")
	private Float maxIdling;
	
	@Column(name = "min_idling")
	private Float minIdling;
	
	@Column(name = "idling_pressure")
	private Float idlingPressure;
	
	@Column(name = "max_pre_injection")
    private Float maxPreInjection;

	@Column(name = "min_pre_injection")
    private Float minPreInjection;
	
	@Column(name = "pre_injection_pressure")
    private Float preInjectionPressure;
	
	@Column(name = "max_half_load_return")
	private Float maxHalfLoadReturn;
	
	@Column(name = "min_half_load_return")
	private Float minHalfLoadReturn;
	
	@Column(name = "max_full_load_return")
	private Float maxFullLoadReturn;
	
	@Column(name = "min_full_load_return")
	private Float minFullLoadReturn;
	
	@Column(name = "max_idling_return")
	private Float maxIdlingReturn;
	
	@Column(name = "min_idling_return")
	private Float minIdlingReturn;
	
	@Column(name = "max_pre_injection_return")
    private Float maxPreInjectionReturn;

	@Column(name = "min_pre_injection_return")
    private Float minPreInjectionReturn;
	
	public Plan() {
		
	}
	
	public Plan(PlanDTO dto) {
		this.setId(dto.id());
		this.setType(dto.type());
		this.setCode(dto.code());
		this.setDescription(dto.description());
		this.setMaxResistance(dto.maxResistance());
		this.setMinResistance(dto.minResistance());
		this.setMaxInductance(dto.maxInductance());
		this.setMinInductance(dto.minInductance());
		this.setMaxIsolation(dto.maxIsolation());
		this.setMinIsolation(dto.minIsolation());
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
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
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
	public Float getMaxResistance() {
		return maxResistance;
	}
	public void setMaxResistance(Float maxResistance) {
		this.maxResistance = maxResistance;
	}
	public Float getMinResistance() {
		return minResistance;
	}
	public void setMinResistance(Float minResistance) {
		this.minResistance = minResistance;
	}
	public Float getMaxInductance() {
		return maxInductance;
	}
	public void setMaxInductance(Float maxInductance) {
		this.maxInductance = maxInductance;
	}
	public Float getMinInductance() {
		return minInductance;
	}
	public void setMinInductance(Float minInductance) {
		this.minInductance = minInductance;
	}
	public Float getMaxIsolation() {
		return maxIsolation;
	}
	public void setMaxIsolation(Float maxIsolation) {
		this.maxIsolation = maxIsolation;
	}
	public Float getMinIsolation() {
		return minIsolation;
	}
	public void setMinIsolation(Float minIsolation) {
		this.minIsolation = minIsolation;
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
}
