package com.need82.packag.utils;

import org.springframework.web.multipart.MultipartFile;

import com.need82.packag.model.PackageDetails;
import com.need82.packag.model.PackageModel;

public class BaseRequest {
	
	private MultipartFile image;
	private PackageModel packageData;
	private PackageDetails packageDetailsData;

	public MultipartFile getImage() {
		return image;
	}

	public PackageModel getPackageData() {
		return packageData;
	}

	public PackageDetails getPackageDetailsData() {
		return packageDetailsData;
	}

	public void setImage(MultipartFile image) {
		this.image = image;
	}

	public void setPackageData(PackageModel packageData) {
		this.packageData = packageData;
	}

	public void setPackageDetailsData(PackageDetails packageDetailsData) {
		this.packageDetailsData = packageDetailsData;
	}

	@Override
	public String toString() {
		return "BaseRequest [image=" + image + ", packageData=" + packageData + ", packageDetailsData="
				+ packageDetailsData + "]";
	}

}
