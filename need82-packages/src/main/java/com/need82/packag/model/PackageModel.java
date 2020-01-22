package com.need82.packag.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@Entity
@Table(name = "package")
public class PackageModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private String tourName;

	@Column
	private Integer noOfDays;

	@Column
	private Integer noOfNights;

	@Column
	private Double price;

	@Column
	private String imageUrl;

	@ManyToOne(cascade=CascadeType.ALL)
	@NotNull
	private User createdBy;

	@OneToMany(cascade = CascadeType.ALL)
	private List<PackageDetails> details;

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

	public String getTourName() {
		return tourName;
	}

	public Integer getNoOfDays() {
		return noOfDays;
	}

	public Integer getNoOfNights() {
		return noOfNights;
	}

	public Double getPrice() {
		return price;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public List<PackageDetails> getDetails() {
		return details;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setTourName(String tourName) {
		this.tourName = tourName;
	}

	public void setNoOfDays(Integer noOfDays) {
		this.noOfDays = noOfDays;
	}

	public void setNoOfNights(Integer noOfNights) {
		this.noOfNights = noOfNights;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public void setDetails(List<PackageDetails> details) {
		this.details = details;
	}

	public User getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(User createdBy) {
		this.createdBy = createdBy;
	}

	@Override
	public String toString() {
		return "PackageModel [id=" + id + ", tourName=" + tourName + ", noOfDays=" + noOfDays + ", noOfNights="
				+ noOfNights + ", price=" + price + ", imageUrl=" + imageUrl + ", createdBy=" + createdBy + ", details="
				+ details + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}

}