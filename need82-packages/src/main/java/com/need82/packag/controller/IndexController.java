package com.need82.packag.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

	@GetMapping("/")
	public String main(Model model) {
		return "index"; // view
	}

	@GetMapping("/package/view")
	public String view(Model model) {
		return "viewPackage"; // view
	}

	@GetMapping("/package/add")
	public String add(Model model) {
		return "addPackage"; // view
	}

	@GetMapping("/package/edit")
	public String edit(Model model) {
		return "editPackage"; // view
	}

}
