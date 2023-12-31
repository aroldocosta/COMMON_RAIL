package com.oficinabr.rail.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oficinabr.rail.entity.Injector;
import com.oficinabr.rail.entity.Test;
import com.oficinabr.rail.entity.Workshop;

public interface TestRepository extends JpaRepository<Test, String>{
	List<Test> findByWorkshop(Workshop workshop);
	List<Test> findByInjector(Injector injector);
	List<Test> findByServiceOrder(String serviceOrder);
	List<Test> findByServiceOrderAndInjectorNumber(String serviceOrder, Integer injectorNumber);
	List<Test> findAllByOrderByDateDesc();
}
