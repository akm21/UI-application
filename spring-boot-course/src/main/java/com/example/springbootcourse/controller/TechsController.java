package com.example.springbootcourse.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootcourse.model.Tech;
import com.example.springbootcourse.service.TechsService;
import com.example.springbootcourse.repository.TechsRepository;

//mark class as Controller
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/techs/")
public class TechsController {
//autowire the BooksService class
	@Autowired
	TechsService techsService;
	@Autowired
	TechsRepository techsRepository;

	private static final Logger Logger = LoggerFactory.getLogger(TechsController.class);

//creating a get mapping that retrieves all the books detail from the database 
	@GetMapping("/tech")
	public ResponseEntity getAllTechs() {
		try {
			Logger.info("retrieve all tech");
			return new ResponseEntity(techsService.getAllTechs(), HttpStatus.OK);
		} catch (Exception ex) {
			Logger.info("cannot retrieve tech");
			return new ResponseEntity("cannot retrieve tech", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

//creating a get mapping that retrieves the detail of a specific book
	@GetMapping("/tech/{techid}")
	public ResponseEntity getTechs(@PathVariable("techid") int techid) {
		try {
			Logger.info("retrieve a tech");
			return new ResponseEntity(techsService.getTechsById(techid), HttpStatus.OK);
		} catch (Exception ex) {
			Logger.info("cannot retrieve tech");
			return new ResponseEntity("cannot retrieve tech", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

//creating a delete mapping that deletes a specified book
	@DeleteMapping("/tech/{techid}")
	public ResponseEntity deleteTech(@PathVariable("techid") int techid) {
		try {
			Logger.info("tech deleted");
			techsService.delete(techid);
			return new ResponseEntity("tech deleted", HttpStatus.OK);
		} catch (Exception ex) {
			Logger.info("cannot delete tech");
			return new ResponseEntity("cannot delete tech", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

//creating post mapping that post the book detail in the database
	@PostMapping("/tech")
	public ResponseEntity saveTech(@RequestBody Tech techs) {
		try {
			Logger.info("Tech added");
			techsService.saveOrUpdate(techs);
			return new ResponseEntity(techs.getTechid(), HttpStatus.OK);
		} catch (Exception ex) {
			Logger.info("cannot add tech");
			return new ResponseEntity("Tech cannot be added", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

//creating put mapping that updates the book detail 
	@PutMapping("/tech/{techid}")
	public ResponseEntity updateTech(@RequestBody Tech techs,@PathVariable int techid) {
		try {
			Tech tech = techsService.getTechsById(techid);
			
			tech.setTechname(techs.getTechname());
			tech.setCourse(techs.getCourse());
			//tech.setTechid(techs.getTechid());
			
			//Tech tech=techsRepository.findbyI()
			Logger.info("Tech Updated");
			techsService.saveOrUpdate(tech);
			return new ResponseEntity(tech, HttpStatus.OK);
		} catch (Exception ex) {
			Logger.info("cannot update tech");
			return new ResponseEntity("Tech cannot be updated", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
