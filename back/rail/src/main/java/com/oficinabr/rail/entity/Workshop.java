package com.oficinabr.rail.entity;

import java.util.List;

import com.oficinabr.rail.dto.WorkshopDTO;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Table(name = "workshop")
@Entity(name = "workshop")
public class Workshop {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@OneToMany(mappedBy = "workshop", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<User> userList;
	
	@OneToMany(mappedBy = "workshop", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Test> testList;
	
	@OneToMany(mappedBy = "workshop", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Plan> planList;
	
	@OneToMany(mappedBy = "workshop", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Vehicle> vehicleList;
	
	@OneToMany(mappedBy = "workshop", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Injector> injectorList;
	
	public static final String ADMIN_WORKSHOP = "recodiesel_id";
	
	public Workshop() {
		
	}
	
	public Workshop(String id) {
		this.id = id;
	}
	
	public Workshop(WorkshopDTO dto) {
		this.id = dto.id();
		this.name = dto.name();
		this.description = dto.description();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<User> getUserList() {
		return userList;
	}

	public void setUserList(List<User> userList) {
		this.userList = userList;
	}

	public List<Test> getTestList() {
		return testList;
	}

	public void setTestList(List<Test> testList) {
		this.testList = testList;
	}

	public List<Plan> getPlanList() {
		return planList;
	}

	public void setPlanList(List<Plan> planList) {
		this.planList = planList;
	}

	public List<Vehicle> getVehicleList() {
		return vehicleList;
	}

	public void setVehicleList(List<Vehicle> vehicleList) {
		this.vehicleList = vehicleList;
	}

	public List<Injector> getInjectorList() {
		return injectorList;
	}

	public void setInjectorList(List<Injector> injectorList) {
		this.injectorList = injectorList;
	}
}
