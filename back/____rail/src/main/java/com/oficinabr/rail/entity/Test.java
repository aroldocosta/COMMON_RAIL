package com.oficinabr.rail.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Table(name = "test")
@Entity(name = "test")
public class Test {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "injector_id")
	private Injector injector;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "plan_id")
	private Plan plan;
	
	@Column(name = "sequence")
	private Long sequence;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "resistence")
	private Float resistence;
	
	@Column(name = "inductance")
	private Float inductance;
	
	@Column(name = "isolation")
	private Float isolation;
	
	@Column(name = "half_load")
	private Float halfLoad;
	
	@Column(name = "full_load")
	private Float fullLoad;
	
	@Column(name = "idling")
	private Float idling;
	
	@Column(name = "half_load_return")
	private Float halfLoadReturn;
	
	@Column(name = "full_load_return")
	private Float fullLoadReturn;
	
	@Column(name = "idling_return")
	private Float idlingReturn;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Injector getInjector() {
		return this.injector;
	}

	public void setVehicle(Injector injector) {
		this.injector = injector;
	}

	public Plan getPlan() {
		return plan;
	}

	public void setPlan(Plan plan) {
		this.plan = plan;
	}

	public Long getSequence() {
		return sequence;
	}

	public void setSequence(Long sequence) {
		this.sequence = sequence;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Float getResistence() {
		return resistence;
	}

	public void setResistence(Float resistence) {
		this.resistence = resistence;
	}

	public Float getInductance() {
		return inductance;
	}

	public void setInductance(Float inductance) {
		this.inductance = inductance;
	}

	public Float getIsolation() {
		return isolation;
	}

	public void setIsolation(Float isolation) {
		this.isolation = isolation;
	}

	public Float getHalfLoad() {
		return halfLoad;
	}

	public void setHalfLoad(Float halfLoad) {
		this.halfLoad = halfLoad;
	}

	public Float getFullLoad() {
		return fullLoad;
	}

	public void setFullLoad(Float fullLoad) {
		this.fullLoad = fullLoad;
	}

	public Float getIdling() {
		return idling;
	}

	public void setIdling(Float idling) {
		this.idling = idling;
	}

	public Float getHalfLoadReturn() {
		return halfLoadReturn;
	}

	public void setHalfLoadReturn(Float halfLoadReturn) {
		this.halfLoadReturn = halfLoadReturn;
	}

	public Float getFullLoadReturn() {
		return fullLoadReturn;
	}

	public void setFullLoadReturn(Float fullLoadReturn) {
		this.fullLoadReturn = fullLoadReturn;
	}

	public Float getIdlingReturn() {
		return idlingReturn;
	}

	public void setIdlingReturn(Float idlingReturn) {
		this.idlingReturn = idlingReturn;
	}
}
