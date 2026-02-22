package com.secretsanta.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.secretsanta.entity.Assignment;
import com.secretsanta.entity.Event;

public interface AssignmentRepository extends JpaRepository<Assignment, Integer> {

    List<Assignment> findByEvent(Event event);

}