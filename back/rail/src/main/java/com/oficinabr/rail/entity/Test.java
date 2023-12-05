package com.oficinabr.rail.entity;

import com.oficinabr.rail.dto.TestDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;



@Table(name = "test")
@Entity(name = "test")
public class Test {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	@Column(name = "id")
	private String id;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "vehicle_id")
	private Vehicle vehicle;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "injector_id")
	private Injector injector;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "plan_id")
	private Plan plan;

	@Column(name = "injector_number")
	private Integer injectorNumber;
	
	@Column(name = "ima_code")
	private String imaCode;
	
	@Column(name = "service_order")
	private String serviceOrder;
	
	@Column(name = "sequence")
	private Long sequence;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "comments")
	private String comments;
	
	@Column(name = "resistance")
	private Float resistance;
	
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
	
	@Column(name = "pre_injection")
	private Float preInjection;
	
	@Column(name = "half_load_return")
	private Float halfLoadReturn;
	
	@Column(name = "full_load_return")
	private Float fullLoadReturn;
	
	@Column(name = "idling_return")
	private Float idlingReturn;

	@Column(name = "pre_injection_return")
	private Float preInjectionReturn;
	
	public Test() {
		
	}
	
	public Test(TestDTO dto) {
		this.setId(dto.id());
		this.setInjectorNumber(dto.injectorNumber());
		this.setSequence(dto.sequence());
		this.setDate(dto.date());
		this.setComments(dto.comments());
		this.setResistance(dto.resistance());
		this.setInductance(dto.inductance());
		this.setIsolation(dto.isolation());
		//------------------------------------
		this.setHalfLoad(dto.halfLoad());
		this.setFullLoad(dto.fullLoad());
		this.setIdling(dto.idling());
		this.setPreInjection(dto.preInjection());
		//----------------------------------
		this.setHalfLoadReturn(dto.halfLoadReturn());
		this.setFullLoadReturn(dto.fullLoadReturn());
		this.setIdlingReturn(dto.idlingReturn());
		this.setPreInjectionReturn(dto.preInjectionReturn());
		//----------------------------------
		this.setImaCode(dto.imaCode());
		this.setServiceOrder(dto.serviceOrder());
	}
	
	/*
	t.getId(),
	t.getSequence(),
	t.getDate(),
	t.getResistance(),
	t.getInductance(),
	t.getIsolation(),
	t.getHalfLoad(),
	t.getFullLoad(),
	t.getIdling(),
	t.getPreInjection(),
	t.getHalfLoadReturn(),
	t.getFullLoadReturn(),
	t.getIdlingReturn(),
	t.getPreInjectionReturn(),
	t.getPlan().getId(),
	t.getInjector().getId(),
	t.getInjector().getCode(),
	t.getInjector().getVehicle().getId(),
	t.getInjector().getVehicle().getPlate(),
	t.getImaCode(),
	t.getServiceOrder()
	 */
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	public Injector getInjector() {
		return this.injector;
	}

	public void setInjector(Injector injector) {
		this.injector = injector;
	}

	public Plan getPlan() {
		return plan;
	}

	public void setPlan(Plan plan) {
		this.plan = plan;
	}

	public Integer getInjectorNumber() {
		return injectorNumber;
	}

	public void setInjectorNumber(Integer injectorNumber) {
		this.injectorNumber = injectorNumber;
	}

	public String getImaCode() {
		return imaCode;
	}

	public void setImaCode(String imaCode) {
		this.imaCode = imaCode;
	}

	public String getServiceOrder() {
		return serviceOrder;
	}

	public void setServiceOrder(String serviceOrder) {
		this.serviceOrder = serviceOrder;
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

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public Float getResistance() {
		return resistance;
	}

	public void setResistance(Float resistance) {
		this.resistance = resistance;
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

	public Float getPreInjection() {
		return preInjection;
	}

	public void setPreInjection(Float preInjection) {
		this.preInjection = preInjection;
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

	public Float getPreInjectionReturn() {
		return preInjectionReturn;
	}

	public void setPreInjectionReturn(Float preInjectionReturn) {
		this.preInjectionReturn = preInjectionReturn;
	}
}
