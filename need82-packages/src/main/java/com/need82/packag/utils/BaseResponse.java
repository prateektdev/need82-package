package com.need82.packag.utils;

import java.util.List;

import com.need82.packag.model.PackageModel;

public class BaseResponse {

	private String message;
	private Boolean success;
	private List<PackageModel> response;

	public String getMessage() {
		return message;
	}

	public Boolean getSuccess() {
		return success;
	}

	public List<PackageModel> getResponse() {
		return response;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}

	public void setResponse(List<PackageModel> response) {
		this.response = response;
	}

	@Override
	public String toString() {
		return "BaseResponse [message=" + message + ", success=" + success + ", response=" + response + "]";
	}

	public BaseResponse(Boolean success,String message,  List<PackageModel> response) {
		super();
		this.message = message;
		this.success = success;
		this.response = response;
	}

	public BaseResponse(Boolean success,String message) {
		super();
		this.message = message;
		this.success = success;
	}

	public BaseResponse() {
	}

}
