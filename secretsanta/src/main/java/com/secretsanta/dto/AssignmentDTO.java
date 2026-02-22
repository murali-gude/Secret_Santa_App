package com.secretsanta.dto;

import lombok.Data;

@Data
public class AssignmentDTO {

    private String giverName;
    private String giverEmail;

    private String receiverName;
    private String receiverEmail;

}