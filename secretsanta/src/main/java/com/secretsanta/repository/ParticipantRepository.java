package com.secretsanta.repository;

import com.secretsanta.entity.Participant;
import com.secretsanta.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ParticipantRepository extends JpaRepository<Participant, Integer> {

    List<Participant> findByEvent(Event event);

    List<Participant> findByEventEventId(Integer eventId);

}