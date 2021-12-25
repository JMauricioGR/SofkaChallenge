/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.service;

import com.challenge.qanda.model.Question;
import com.challenge.qanda.repository.QuestionRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author JehisonGalarza
 */
@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;
    
    public List<Question> getAll(){
        return questionRepository.getAll();
    }
    
    public Question create(Question question){
        if(question.getIdQuestion() == null){
            return question;
        }else{
            return questionRepository.create(question);
        }
    }
    
    public Optional<Question> getQuestion(Integer Id){
        return questionRepository.getQuestion(Id);
    }
    
    public List<Question> getQuestionsDesc(){
        return questionRepository.getQuestionsDesc();
    }
    
    public List<Question> getQuestionsByLevel(Integer level){
        return questionRepository.getQuestionsByLevel(level);
    }
}
