/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.controller;

import com.challenge.qanda.model.Options;
import com.challenge.qanda.service.OptionsService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author JehisonGalarza
 */
@RestController
@RequestMapping("/api/options/")
@CrossOrigin("*")
public class OptionsController {
    @Autowired
    private OptionsService optionsService;
    
    @GetMapping("{id}")
    public List<Options> getOptions(@PathVariable("id") Integer id){
        return optionsService.getOptions(id);    }
    
    @PostMapping("new")
    @ResponseStatus(HttpStatus.CREATED)
    public Options createOption(@RequestBody Options option){
        return optionsService.createOption(option);
    }
}
