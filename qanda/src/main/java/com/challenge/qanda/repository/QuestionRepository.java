/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.repository;

import com.challenge.qanda.model.Question;
import com.challenge.qanda.repository.crud.QuestionCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author JehisonGalarza
 */
@Repository
public class QuestionRepository {
    @Autowired
    private QuestionCrudRepository questionCrudRepository;
    
    public Question create(Question question){
        return questionCrudRepository.save(question);
    }
    
    public List<Question> getAll(){
        return questionCrudRepository.findAll();
    }
    
    public Optional<Question> getQuestion(Integer id){
        return questionCrudRepository.findById(id);
    }
    
    public List<Question> getQuestionsDesc(){
        return questionCrudRepository.findTop1ByOrderByIdQuestionDesc();
    }
    
    public List<Question> getQuestionsByLevel(Integer level){
        return questionCrudRepository.findByLevel(level);
    }
}
