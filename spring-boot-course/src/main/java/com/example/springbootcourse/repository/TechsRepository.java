package com.example.springbootcourse.repository;

import org.springframework.data.repository.CrudRepository;
//repository that extends CrudRepository
import com.example.springbootcourse.model.Tech;
public interface TechsRepository extends CrudRepository<Tech, Integer>
{
}



