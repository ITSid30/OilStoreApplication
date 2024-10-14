package com.example.oilCatalog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.oilCatalog.entities.Oil;
import com.example.oilCatalog.services.OilService;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin("*")
@RestController
public class Controller {

	@GetMapping("landing")
	public String home() {
		return "Welcome to Oil Store";
	}
	
	@Autowired
	private OilService oilService;
	
	@GetMapping("oils")
	public List<Oil> getOils() {
		
		return this.oilService.getOils();
	}
	
	@GetMapping("oils/{oilId}")
	public Oil getOil(@PathVariable String oilId) {
		
		return this.oilService.getOil(Long.parseLong(oilId));
	}
	
	@PostMapping("oils")
	public Oil addOils(@RequestBody Oil newOil) {
		
		return this.oilService.addOils(newOil);
	}
	
	@PutMapping("oils")
	public Oil updateOil(@RequestBody Oil oil) {
		
		return this.oilService.updateOils(oil);
	}
	
	@DeleteMapping("oils/{oilId}")
	public ResponseEntity<HttpStatus> deleteOil(@PathVariable String oilId) {
		
		try {
			this.oilService.deleteOils(Long.parseLong(oilId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
