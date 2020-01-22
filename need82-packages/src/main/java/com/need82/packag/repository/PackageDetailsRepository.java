package com.need82.packag.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.need82.packag.model.PackageDetails;

/**
 * Created by cisrivedi.
 */

@Repository
public interface PackageDetailsRepository extends JpaRepository<PackageDetails, Long> {

	public PackageDetails save(PackageDetails packageDetails);

	public List<PackageDetails> findByItenary(String itenary);

	public Optional<PackageDetails> findById(Long id);

	public List<PackageDetails> findByDay(Integer day);

}
