package com.secretsanta.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.secretsanta.dto.AssignmentDTO;
import com.secretsanta.entity.Assignment;
import com.secretsanta.entity.Event;
import com.secretsanta.repository.AssignmentRepository;
import com.secretsanta.repository.EventRepository;

@RestController
@RequestMapping("/events")
public class AssignmentController {

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private EventRepository eventRepository;

    @GetMapping("/{eventId}/assignments")
public List<AssignmentDTO> getAssignments(@PathVariable Integer eventId) {

    Event event = eventRepository.findById(eventId)
            .orElseThrow(() -> new RuntimeException("Event not found"));

    List<Assignment> assignments = assignmentRepository.findByEvent(event);

    return assignments.stream().map(a -> {
        AssignmentDTO dto = new AssignmentDTO();
        dto.setGiverName(a.getGiver().getName());
        dto.setGiverEmail(a.getGiver().getEmail());
        dto.setReceiverName(a.getReceiver().getName());
        dto.setReceiverEmail(a.getReceiver().getEmail());
        return dto;
    }).collect(Collectors.toList());
}}