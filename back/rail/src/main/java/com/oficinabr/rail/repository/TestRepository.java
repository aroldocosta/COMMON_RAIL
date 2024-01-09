package com.oficinabr.rail.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oficinabr.rail.entity.Test;

public interface TestRepository extends JpaRepository<Test, String>{
	List<Test> findByServiceOrder(String serviceOrder);
	List<Test> findByServiceOrderAndInjectorNumber(String serviceOrder, Integer injectorNumber);
	List<Test> findByWorkshopId(String id);
}
