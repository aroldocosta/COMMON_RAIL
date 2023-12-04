package com.oficinabr.rail.entity;

import java.util.List;

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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String code;
	
	@OneToMany(mappedBy = "plan", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Test> testList;
	
	@Column(name = "max_resistence")
	private Float maxResistence;
	
	@Column(name = "min_resistence")
	private Float minResistence;
	
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
	
	@Column(name = "max_full_load")
	private Float maxFullLoad;
	
	@Column(name = "min_full_load")
	private Float minFullLoad;
	
	@Column(name = "max_idling")
	private Float maxIdling;
	
	@Column(name = "min_idling")
	private Float minIdling;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public List<Test> getTestList() {
		return testList;
	}
	public void setTestList(List<Test> testList) {
		this.testList = testList;
	}
	public Float getMaxResistence() {
		return maxResistence;
	}
	public void setMaxResistence(Float maxResistence) {
		this.maxResistence = maxResistence;
	}
	public Float getMinResistence() {
		return minResistence;
	}
	public void setMinResistence(Float minResistence) {
		this.minResistence = minResistence;
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
}
