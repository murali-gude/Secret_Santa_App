package com.secretsanta.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.secretsanta.entity.Assignment;
import com.secretsanta.entity.Event;
import com.secretsanta.entity.Participant;
import com.secretsanta.repository.AssignmentRepository;
import com.secretsanta.repository.EventRepository;
import com.secretsanta.repository.ParticipantRepository;


@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }
    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
}
    @Autowired
    private ParticipantRepository participantRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @PostMapping("/{eventId}/draw")
    public String drawSecretSanta(@PathVariable Integer eventId) {

        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        List<Participant> participants = participantRepository.findByEvent(event);
        
        if (participants.size() < 2) {
            throw new RuntimeException("Minimum 2 participants required");
        }

        Collections.shuffle(participants);

        for (int i = 0; i < participants.size(); i++) {

            Participant giver = participants.get(i);
            Participant receiver = participants.get((i + 1) % participants.size());

            Assignment assignment = new Assignment();
            assignment.setEvent(event);
            assignment.setGiver(giver);
            assignment.setReceiver(receiver);

            assignmentRepository.save(assignment);
        }

        return "Secret Santa draw completed successfully!";
    }

}
