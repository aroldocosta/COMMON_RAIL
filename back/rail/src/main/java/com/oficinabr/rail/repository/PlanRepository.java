package com.oficinabr.rail.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oficinabr.rail.entity.Plan;

public interface PlanRepository extends JpaRepository<Plan, String>{
	List<Plan> findByWorkshopId(String id);
}
