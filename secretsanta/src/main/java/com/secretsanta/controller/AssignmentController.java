package com.secretsanta.controller;

import com.secretsanta.entity.Assignment;
import com.secretsanta.entity.Event;
import com.secretsanta.entity.Participant;
import com.secretsanta.repository.AssignmentRepository;
import com.secretsanta.repository.ParticipantRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Collections;

@RestController
@RequestMapping("/assignments")
@CrossOrigin(origins = "http://localhost:5173")
public class AssignmentController {

    @Autowired
    private ParticipantRepository participantRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;


    // ✅ SELF DRAW METHOD WITH DUPLICATE PROTECTION
    @PostMapping("/participants/{participantId}/draw")
    public Assignment drawForParticipant(@PathVariable Integer participantId) {

        Participant giver = participantRepository.findById(participantId)
                .orElseThrow(() -> new RuntimeException("Participant not found"));

        Event event = giver.getEvent();

        // ✅ CHECK if already drawn
        Assignment existingAssignment =
                assignmentRepository.findByGiver(giver);

        if (existingAssignment != null) {
            return existingAssignment;
        }

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
    @GetMapping("/participants/{participantId}")
public Assignment getAssignment(@PathVariable Integer participantId) {

    Participant giver = participantRepository.findById(participantId)
            .orElseThrow();

    return assignmentRepository.findByGiver(giver);
}

}