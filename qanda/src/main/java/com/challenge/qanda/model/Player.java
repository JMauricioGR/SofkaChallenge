/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Clase que define los atributos de un jugador
 * @author JehisonGalarza
 */
@Document("Users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Player {    
    
    private String name;
    private Integer prize;
    private Integer level;
}
