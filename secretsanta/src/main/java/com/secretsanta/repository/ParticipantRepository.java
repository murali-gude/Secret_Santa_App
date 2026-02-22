package com.secretsanta.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.secretsanta.entity.Event;
import com.secretsanta.entity.Participant;


public interface ParticipantRepository extends JpaRepository<Participant, Integer> {

    List<Participant> findByEvent(Event event);

}