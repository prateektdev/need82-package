package com.need82.packag.serviceImpl;

import java.util.Arrays;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.need82.packag.model.PackageDetails;
import com.need82.packag.model.PackageModel;
import com.need82.packag.repository.PackageDetailsRepository;
import com.need82.packag.repository.PackageRepository;
import com.need82.packag.repository.UserRepository;
import com.need82.packag.service.PackageService;
import com.need82.packag.utils.BaseResponse;

@Service
public class PackageServiceImpl implements PackageService {

	@Autowired
	public PackageRepository packageRepo;

	@Autowired
	public UserRepository userRepository;
	
	@Autowired
	public PackageDetailsRepository packageDetailsRepo;

	private PackageModel packageModel;

	@Override
	public BaseResponse savePackage(PackageModel packageObject) {
		try {
			if (packageObject.getId() != null) {
				Optional<PackageModel> packageList = packageRepo.findById(packageObject.getId());
				if (packageList.isPresent()) {
					packageModel = packageList.get();
					PackageModel packageResponse = packageRepo.save(packageObject);
					return new BaseResponse(true, "Updated", Arrays.asList(packageResponse));
				}
			}
			packageObject.setCreatedBy(userRepository.findById(packageObject.getCreatedBy().getId()).get());
			PackageModel packageResponse = packageRepo.save(packageObject);
			return new BaseResponse(true, "Saved", Arrays.asList(packageResponse));

		} catch (Exception e) {
			e.printStackTrace();
			return new BaseResponse(false, "Not saved");
		}
	}

	@Override
	public BaseResponse deletePackage(PackageModel packageObject) {
		// TODO Auto-generated method stub
		return null;
	}

}
