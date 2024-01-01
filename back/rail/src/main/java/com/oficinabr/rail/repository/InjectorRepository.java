package com.oficinabr.rail.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oficinabr.rail.entity.Injector;
import com.oficinabr.rail.entity.Test;

public interface InjectorRepository extends JpaRepository<Injector, String>{
	List<Injector> findByPlanId(String id);	
	List<Injector> findByWorkshopId(String id);
	List<Injector> findByWorkshopIdAndPlanId(String workshopId, String planId);
}
