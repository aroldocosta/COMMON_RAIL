package com.oficinabr.rail.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oficinabr.rail.entity.Injector;
import com.oficinabr.rail.entity.Test;

public interface TestRepository extends JpaRepository<Test, String>{
	
	List<Test> findByInjector(Injector injector);

}
