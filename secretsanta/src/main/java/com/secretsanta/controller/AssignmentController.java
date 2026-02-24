package com.secretsanta.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.secretsanta.entity.Assignment;
import com.secretsanta.entity.Event;
import com.secretsanta.entity.Participant;
import com.secretsanta.repository.AssignmentRepository;
import com.secretsanta.repository.ParticipantRepository;

@RestController
@RequestMapping("/assignments")
public class AssignmentController {

    @Autowired
    private ParticipantRepository participantRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @PostMapping("/participants/{participantId}/draw")
    public Assignment drawForParticipant(@PathVariable Integer participantId) {

        Participant giver = participantRepository.findById(participantId)
                .orElseThrow(() -> new RuntimeException("Participant not found"));

        Event event = giver.getEvent();

        List<Participant> participants =
                participantRepository.findByEvent(event);

        if (participants.size() < 2) {
            throw new RuntimeException("Not enough participants");
        }

        Collections.shuffle(participants);

        Participant receiver = participants.stream()
                .filter(p -> !p.getParticipantId().equals(participantId))
                .findFirst()
                .orElseThrow();

        Assignment assignment = new Assignment();
        assignment.setEvent(event);
        assignment.setGiver(giver);
        assignment.setReceiver(receiver);

        return assignmentRepository.save(assignment);
    }
}