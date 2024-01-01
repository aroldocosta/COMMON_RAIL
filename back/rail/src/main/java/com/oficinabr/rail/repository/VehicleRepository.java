package com.oficinabr.rail.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oficinabr.rail.entity.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, String>{
	List<Vehicle> findByWorkshopId(String id);
}
