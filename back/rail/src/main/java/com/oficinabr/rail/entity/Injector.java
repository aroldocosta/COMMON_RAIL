package com.oficinabr.rail.entity;

import java.util.List;

import com.oficinabr.rail.dto.InjectorDTO;

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

@Table(name = "injector")
@Entity(name = "injector")
public class Injector {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;
	
	@Column(name = "model")
	private String model;
	
	@Column(name = "description")
	private String description;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "plan_id")
	private Plan plan;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "workshop_id")
	private Workshop workshop;
	
	@OneToMany(mappedBy = "injector", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Test> testList;
		
	public Injector() {
		
	}
	
	public Injector(InjectorDTO dto) {
		this.setId(dto.id());
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

	public List<Test> getTestList() {
		return testList;
	}

	public void setTestList(List<Test> testList) {
		this.testList = testList;
	}
}
