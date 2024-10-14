package com.example.oilCatalog.services;

import java.util.List;

import com.example.oilCatalog.entities.Oil;

public interface OilService {
	
	public List<Oil> getOils();
	
	public Oil getOil(long oilId);
	
	public Oil addOils(Oil newOil);
	
	public Oil updateOils(Oil oil);
	
	public void deleteOils(long oilId);
}
