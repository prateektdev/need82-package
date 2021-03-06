package com.need82.packag.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.need82.packag.model.PackageModel;

/**
 * Created by prateek trivedi.
 */

@Repository
public interface PackageRepository extends JpaRepository<PackageModel, Long> {

	public PackageModel save(PackageModel packageModel);

	public List<PackageModel> findByTourName(String tourName);

	public Optional<PackageModel> findById(Long id);
	
	public List<PackageModel> findByPrice(Double price);
	
	

}
