package com.need82.packag.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.need82.packag.exception.ResourceNotFoundException;
import com.need82.packag.model.PackageModel;
import com.need82.packag.repository.PackageRepository;
import com.need82.packag.serviceImpl.PackageServiceImpl;
import com.need82.packag.utils.BaseResponse;

/**
 * Created by prateek trivedi.
 */
@RestController
@RequestMapping("/api")
public class PackageController {

	@Autowired
	PackageRepository packageRepository;

	@Autowired
	PackageServiceImpl packageService;

	@GetMapping("/packages")
	public List<PackageModel> getAllPackages() {
		return packageRepository.findAll();
	}

	@PostMapping("/packages")
	public BaseResponse createPackage(@RequestBody PackageModel packageModel) {
		System.out.println(packageModel.toString());
		BaseResponse response = packageService.savePackage(packageModel);
		System.out.println("package : " + packageModel.toString());
		return response;
	}

	@GetMapping("/packages/{id}")
	public PackageModel getPackageById(@PathVariable(value = "id") Long packageId) {
		return packageRepository.findById(packageId)
				.orElseThrow(() -> new ResourceNotFoundException("Package", "id", packageId));
	}

	@PutMapping("/packages/{id}")
	public BaseResponse updatePackage(@PathVariable(value = "id") Long packageId,
			@Valid @RequestBody PackageModel packageDetails) {

		PackageModel packageModel = packageRepository.findById(packageId)
				.orElseThrow(() -> new ResourceNotFoundException("Package", "id", packageId));

		packageModel.setTourName(packageDetails.getTourName());
		packageModel.setNoOfDays(packageDetails.getNoOfDays());
		packageModel.setNoOfNights(packageDetails.getNoOfNights());
		packageModel.setPrice(packageDetails.getPrice());
		packageModel.setImageUrl(packageDetails.getImageUrl());
		packageModel.setDetails(packageDetails.getDetails());
		BaseResponse updatedNote = packageService.savePackage(packageModel);
		return updatedNote;
	}

	@DeleteMapping("/packages/{id}")
	public ResponseEntity<?> deletePackage(@PathVariable(value = "id") Long packageId) {
		PackageModel packageModel = packageRepository.findById(packageId)
				.orElseThrow(() -> new ResourceNotFoundException("Package", "id", packageId));

		packageRepository.delete(packageModel);

		return ResponseEntity.ok().build();
	}
}
