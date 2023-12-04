package com.oficinabr.rail.entity;

import java.util.List;

import com.oficinabr.rail.dto.VehicleDTO;

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

@Table(name = "vehicle")
@Entity(name = "vehicle")
public class Vehicle {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;
	
	@Column(name = "plate")
	private String plate;
	
	@Column(name = "model")
	private String model;
	
	@Column(name = "year_model")
	private String yearModel;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "owner_id")
	private User owner;
	
	@OneToMany(mappedBy = "vehicle", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Test> testList;
	
	public Vehicle() {
		
	}
	
	public Vehicle(String id) {
		this.setId(id);
	}
	
	public Vehicle(VehicleDTO dto) {
		this.setId(dto.id());
		this.setModel(dto.model());
		this.setYearModel(dto.yearModel());
		this.setPlate(dto.plate());
		this.setOwner(owner);
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPlate() {
		return plate;
	}
	
	public void setPlate(String plate) {
		this.plate = plate;
	}
	
	public String getModel() {
		return model;
	}
	
	public void setModel(String model) {
		this.model = model;
	}	
	
	public String getYearModel() {
		return yearModel;
	}

	public void setYearModel(String yearModel) {
		this.yearModel = yearModel;
	}

	public User getOwner() {
		return owner;
	}
	
	public void setOwner(User owner) {
		this.owner = owner;
	}
}
