/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.repository;

import com.challenge.qanda.model.Options;
import com.challenge.qanda.repository.crud.OptionsCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author JehisonGalarza
 */
@Repository
public class OptionRepository {
    @Autowired
    private OptionsCrudRepository optionsCrudRepository;
    
    public List<Options> getOptions(Integer id){
        return optionsCrudRepository.findByIdquestion(id);
    }
    
    public Options createOptions(Options option){
        return optionsCrudRepository.save(option);
    }
    
//    public List<Options> lastOption(){
//        return optionsCrudRepository.findTop1ByOrderByIdAnswerDesc();
//    }
}
