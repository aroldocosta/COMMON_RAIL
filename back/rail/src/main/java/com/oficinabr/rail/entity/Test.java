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
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "workshop_id")
	private Workshop workshop;

	@Column(name = "injector_number")
	private Integer injectorNumber;
	
	@Column(name = "ima_code")
	private String imaCode;
	
	@Column(name = "service_order")
	private String serviceOrder;
	
	@Column(name = "customer_name")
	private String customerName;
	
	@Column(name = "sequence")
	private Integer sequence;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "comments")
	private String comments;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "starting")
	private Float starting;
	
	@Column(name = "idling")
	private Float idling;
	
	@Column(name = "half_load")
	private Float halfLoad;
	
	@Column(name = "full_load")
	private Float fullLoad;
	
	@Column(name = "pre_injection")
	private Float preInjection;
	
	@Column(name = "half_load_return")
	private Float halfLoadReturn;
	
	@Column(name = "full_load_return")
	private Float fullLoadReturn;

	@Column(name = "starting_return")
	private Float startingReturn;
	
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
		this.setDescription(dto.description());
		//------------------------------------
		this.setStarting(dto.starting());
		this.setIdling(dto.idling());
		this.setHalfLoad(dto.halfLoad());
		this.setFullLoad(dto.fullLoad());
		this.setPreInjection(dto.preInjection());
		//----------------------------------
		this.setHalfLoadReturn(dto.halfLoadReturn());
		this.setFullLoadReturn(dto.fullLoadReturn());
		this.setStartingReturn(dto.idlingReturn());
		this.setIdlingReturn(dto.idlingReturn());
		this.setPreInjectionReturn(dto.preInjectionReturn());
		//----------------------------------
		this.setImaCode(dto.imaCode());
		this.setServiceOrder(dto.serviceOrder());
		this.setCustomerName(dto.customerName());
	}
	
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

	public Workshop getWorkshop() {
		return workshop;
	}

	public void setWorkshop(Workshop workshop) {
		this.workshop = workshop;
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

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public Integer getSequence() {
		return sequence;
	}

	public void setSequence(Integer sequence) {
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
	public Float getStarting() {
		return starting;
	}

	public void setStarting(Float starting) {
		this.starting = starting;
	}
	
	public Float getIdling() {
		return idling;
	}

	public void setIdling(Float idling) {
		this.idling = idling;
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

	public Float getStartingReturn() {
		return startingReturn;
	}

	public void setStartingReturn(Float startingReturn) {
		this.startingReturn = startingReturn;
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
