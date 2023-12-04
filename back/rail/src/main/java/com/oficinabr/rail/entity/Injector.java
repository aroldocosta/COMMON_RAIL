package com.oficinabr.rail.entity;

import java.util.ArrayList;
import java.util.List;

import com.oficinabr.rail.dto.InjectorDTO;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Table(name = "injector")
@Entity(name = "injector")
public class Injector {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;
	
	@Column(name = "code")
	private String code;
	
	@Column(name = "model")
	private String model;
	
	@Column(name = "description")
	private String description;

//	@ManyToOne(fetch = FetchType.EAGER)
//	@JoinColumn(name = "vehicle_id")
//	private Vehicle vehicle;
	
	@OneToMany(mappedBy = "injector", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Test> testList;
	
	public Injector() {
		
	}
	
	public Injector(InjectorDTO dto) {
		this.setId(dto.id());
		this.setCode(dto.code());
		this.setModel(dto.model());
		this.setDescription(dto.description());
		//this.setTestList(new ArrayList<Test>());
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

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

//	public Vehicle getVehicle() {
//		return vehicle;
//	}
//
//	public void setVehicle(Vehicle vehicle) {
//		this.vehicle = vehicle;
//	}

	public List<Test> getTestList() {
		return testList;
	}

	public void setTestList(List<Test> testList) {
		this.testList = testList;
	}
}
