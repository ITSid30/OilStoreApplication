package com.example.oilCatalog.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Oil {

	@Id
	private long id;
	private String name;
	private String quantity;
	private long price;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public Oil(long id, String name, String quantity, long price) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.price = price;
	}
	public Oil() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Oil [id=" + id + ", name=" + name + ", quantity=" + quantity + ", price=" + price + "]";
	}
	
	
	
}
