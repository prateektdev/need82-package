package com.need82.packag.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "packagedetails")
@Getter
@Setter
public class PackageDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private String itenary;

	@Column
	private String description;

	@Column
	private Integer day;

	@Column
	private String imageUrl;

	@ManyToOne(cascade = CascadeType.ALL)
	private PackageModel packageModel;

	@Column(nullable = true)
	private Double price;

	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAt = new Date();

	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updatedAt = new Date();

	public Long getId() {
		return id;
	}

	public String getItenary() {
		return itenary;
	}

	public String getDescription() {
		return description;
	}

	public Integer getDay() {
		return day;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public Double getPrice() {
		return price;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setItenary(String itenary) {
		this.itenary = itenary;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setDay(Integer day) {
		this.day = day;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public PackageModel getPackageModel() {
		return packageModel;
	}

	public void setPackageModel(PackageModel packageModel) {
		this.packageModel = packageModel;
	}

	@Override
	public String toString() {
		return "PackageDetails [id=" + id + ", itenary=" + itenary + ", description=" + description + ", day=" + day
				+ ", imageUrl=" + imageUrl + ", packageModel=" + packageModel + ", price=" + price + ", createdAt="
				+ createdAt + ", updatedAt=" + updatedAt + "]";
	}

}