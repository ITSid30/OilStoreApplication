package com.example.oilCatalog.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.oilCatalog.entities.Oil;

public interface OilDao extends JpaRepository<Oil, Long> {

}
