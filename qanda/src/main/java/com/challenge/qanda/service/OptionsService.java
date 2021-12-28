/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.service;

import com.challenge.qanda.model.Options;
import com.challenge.qanda.repository.OptionRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author JehisonGalarza
 */
@Service
public class OptionsService {
    @Autowired
    private OptionRepository optionRepository;
    
    public List<Options> getOptions(Integer id){
        return optionRepository.getOptions(id);
    }
    
    public Options createOption(Options option){
        return optionRepository.createOptions(option);
    }
    
//    public List<Options> lastOption(){
//        return optionRepository.lastOption();
//    }
}
