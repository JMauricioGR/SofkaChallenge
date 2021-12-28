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
 *Clase que define los atributos de una opción
 * @author JehisonGalarza
 */
@Document("Options")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Options {    

    private Integer idquestion;
    private String option;
    private Boolean validate;
}
