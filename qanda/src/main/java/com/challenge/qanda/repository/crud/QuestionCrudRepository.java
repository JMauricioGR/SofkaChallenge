/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.repository.crud;

import com.challenge.qanda.model.Question;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author JehisonGalarza
 */
public interface QuestionCrudRepository extends MongoRepository <Question, Integer>{
    List<Question> findTop1ByOrderByIdQuestionDesc();
    List<Question> findByLevel(Integer level);
}
