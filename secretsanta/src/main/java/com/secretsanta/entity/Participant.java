package com.secretsanta.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "participant")
@Data
public class Participant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer participantId;

    private String name;
    private Integer age;
    private String email;

    private String wishlist;

    private Boolean hasDrawn = false;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;
}
