package com.example.springbootcourse.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springbootcourse.exception.CustomException;
import com.example.springbootcourse.model.Tech;
import com.example.springbootcourse.repository.TechsRepository;

//defining the business logic
@Service
public class TechsService {
	@Autowired
	TechsRepository techsRepository;

//getting all books record by using the method findaAll() of CrudRepository
	public List<Tech> getAllTechs() throws CustomException {
		try {
			List<Tech> techs = new ArrayList<Tech>();
			techsRepository.findAll().forEach(techs1 -> techs.add(techs1));
			//techs=techsRepository.findAll();
			return techs;
		} catch (Exception e) {
			throw new CustomException("could not get tech" + e);
		}
	}

//getting a specific record by using the method findById() of CrudRepository
	public Tech getTechsById(int id) throws CustomException {
		try {
			return techsRepository.findById(id).get();
		} catch (Exception e) {
			throw new CustomException("could not get a tech" + e);
		}
	}

//saving a specific record by using the method save() of CrudRepository
	public void saveOrUpdate(Tech techs) throws CustomException {
		try {
			techsRepository.save(techs);
		} catch (Exception e) {
			throw new CustomException("could not add tech" + e);
		}
	}

//deleting a specific record by using the method deleteById() of CrudRepository
	public void delete(int id) throws CustomException {
		try {
			techsRepository.deleteById(id);
		} catch (Exception e) {
			throw new CustomException("Could not delete tech" + e);
		}
	}

//updating a record
	public void update(Tech techs, int techid) throws CustomException {
		try {
			techsRepository.save(techs);
		} catch (Exception e) {
			throw new CustomException("Could not update tech" + e);
		}
	}
}
