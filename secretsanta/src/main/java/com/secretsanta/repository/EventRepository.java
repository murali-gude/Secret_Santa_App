package com.secretsanta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.secretsanta.entity.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {

}
