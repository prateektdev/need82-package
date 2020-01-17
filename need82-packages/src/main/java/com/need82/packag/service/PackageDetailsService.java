package com.need82.packag.service;

import com.need82.packag.model.PackageDetails;
import com.need82.packag.utils.BaseResponse;

public interface PackageDetailsService {

	public BaseResponse savePackageDetails(PackageDetails packageDetails);
	
	public BaseResponse deletePackageDetails(PackageDetails packageDetails);

}
