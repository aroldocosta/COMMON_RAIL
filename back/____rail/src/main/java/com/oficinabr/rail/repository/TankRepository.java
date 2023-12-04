package com.oficinabr.rail.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oficinabr.rail.entity.Tank;

public interface TankRepository extends JpaRepository<Tank, Long> {
	public Tank findByFuel(String fuel);
	public Optional<Tank> findById(Long id);
}
