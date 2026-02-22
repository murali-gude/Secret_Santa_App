package com.secretsanta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.secretsanta.entity.Event;
import com.secretsanta.entity.Participant;
import com.secretsanta.repository.EventRepository;
import com.secretsanta.repository.ParticipantRepository;

@RestController
@RequestMapping("/events")
public class ParticipantController {

    @Autowired
    private ParticipantRepository participantRepository;

    @Autowired
    private EventRepository eventRepository;

    @PostMapping("/{eventId}/participants")
    public Participant addParticipant(
            @PathVariable Integer eventId,
            @RequestBody Participant participant) {

        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        participant.setEvent(event);

        return participantRepository.save(participant);
    }
}
