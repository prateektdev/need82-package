package com.need82.packag.service;

import com.need82.packag.utils.BaseResponse;
import com.need82.packag.model.PackageModel;

public interface PackageService {

	public BaseResponse savePackage(PackageModel packageObject);
	
	public BaseResponse deletePackage(PackageModel packageObject);

}
