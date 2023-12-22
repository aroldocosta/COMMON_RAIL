package com.oficinabr.rail.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oficinabr.rail.entity.Workshop;

public interface WorkshopRepository extends JpaRepository<Workshop, String> {

}
