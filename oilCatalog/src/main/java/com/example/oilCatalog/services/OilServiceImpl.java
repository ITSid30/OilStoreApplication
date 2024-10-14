package com.example.oilCatalog.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.oilCatalog.Dao.OilDao;
import com.example.oilCatalog.entities.Oil;

@Service
public class OilServiceImpl implements OilService {
	
//	List<Oil> oilList;
//	
//	public OilServiceImpl() {
//		oilList = new ArrayList<Oil>();
//		oilList.add(new Oil(1, "Groundnut", "1 L", 360));
//		oilList.add(new Oil(2, "Safflower", "1 L", 380));
//		oilList.add(new Oil(3, "Sunflower", "1 L", 350));
//	}
//
//	@Override
//	public List<Oil> getOils() {
//		// TODO Auto-generated method stub
//		return oilList;
//	}
//
//	@Override
//	public Oil getOil(long oilId) {
//		// TODO Auto-generated method stub
//		Oil temp = null;
//		for(Oil o : oilList) {
//			if(o.getId() == oilId) {
//				temp = o;
//				break;
//			}
//		}
//		return temp;
//	}
//
//	@Override
//	public Oil addOils(Oil newOil) {
//		// TODO Auto-generated method stub
//		oilList.add(newOil);
//		int len = oilList.size() -1;
//		return oilList.get(len);
//	}
//
//	@Override
//	public Oil updateOils(Oil oil) {
//		// TODO Auto-generated method stub
//		Oil temp = null;
//		for(Oil c: oilList) {
//			if(c.getId() == oil.getId()) {
//				c.setName(oil.getName());
//				c.setPrice(oil.getPrice());
//				c.setQuantity(oil.getQuantity());
//				temp = c;
//				break;
//			}
//		}
//		return temp;
//	}
//
//	@Override
//	public void deleteOils(long oilId) {
//		// TODO Auto-generated method stub
//		oilList = this.oilList.stream().filter(o -> o.getId() != oilId).collect(Collectors.toList());
//	}
	
	//////////////////// Using Database  /////////////////////////////
	
	@Autowired
	public OilDao oilDao;

	@Override
	public List<Oil> getOils() {
		// TODO Auto-generated method stub
		return this.oilDao.findAll();
	}

	@Override
	public Oil getOil(long oilId) {
		// TODO Auto-generated method stub
		return this.oilDao.findById(oilId).orElse(null);
	}

	@Override
	public Oil addOils(Oil newOil) {
		// TODO Auto-generated method stub
		return this.oilDao.save(newOil);  // it saves new data and returns that data so no need of next line
	
		// return this.oilDao.findById(newOil.getId()).orElse(null);
	}

	@Override
	public Oil updateOils(Oil oil) {
		// TODO Auto-generated method stub
		Oil existingOil = this.oilDao.findById(oil.getId()).orElse(null);
		if(existingOil != null) {
			existingOil.setName(oil.getName());
			existingOil.setQuantity(oil.getQuantity());
			existingOil.setPrice(oil.getPrice());
			return this.oilDao.save(existingOil);  // it saves new data and returns that data
		} else {
			return null;
		}
	}

	@Override
	public void deleteOils(long oilId) {
		// TODO Auto-generated method stub
		this.oilDao.deleteById(oilId);
	}
	
}
