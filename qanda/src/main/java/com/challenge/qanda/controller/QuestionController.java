/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.controller;

import com.challenge.qanda.model.Question;
import com.challenge.qanda.service.QuestionService;
import java.util.List;
import java.util.Optional;
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
@RequestMapping("/api/question/")
@CrossOrigin("*")
public class QuestionController {
    @Autowired
    private QuestionService questionService;
    
    @GetMapping("all")
    public List<Question> getAll(){
        return questionService.getAll();
    }
    
    @PostMapping("new")
    @ResponseStatus(HttpStatus.CREATED)
    public Question create(@RequestBody Question question){
        return questionService.create(question);
    }
    
    @GetMapping("{id}")
    public Optional<Question> getQuestion(@PathVariable("id") Integer id){
        return questionService.getQuestion(id);
    }
    
    @GetMapping("last")
    public List<Question> getQuestionDesc(){
        return questionService.getQuestionsDesc();
    }
}
