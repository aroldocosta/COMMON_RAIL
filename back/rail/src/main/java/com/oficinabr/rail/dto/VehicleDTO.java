package com.oficinabr.rail.dto;

import com.oficinabr.rail.entity.Vehicle;

public record VehicleDTO(String id, String plate, String model, String yearModel, String ownerId ) {
	public VehicleDTO(Vehicle v) {
		this(v.getId(), v.getPlate(), v.getModel(), v.getYearModel(),  v.getOwner().getId());
	}
}

/*
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;
	
	@Column(name = "plate")
	private String plate;
	
	@Column(name = "model")
	private String model;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "owner_id")
	private User owner;
*/