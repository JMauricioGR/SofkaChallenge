/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Clase donde definimos los atributos de las preguntas 
 * @author JehisonGalarza
 */
@Document("Question")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Question {    
    @Id
    private Integer idQuestion;
    private String question;
    private Integer prize;
    private Options options;
    private Integer level;  
}
