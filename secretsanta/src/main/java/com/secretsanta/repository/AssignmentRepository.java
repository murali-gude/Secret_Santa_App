package com.secretsanta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.secretsanta.entity.Assignment;
import com.secretsanta.entity.Participant;

public interface AssignmentRepository extends JpaRepository<Assignment, Integer> {

    // ✅ prevents duplicate draw
    Assignment findByGiver(Participant giver);

}