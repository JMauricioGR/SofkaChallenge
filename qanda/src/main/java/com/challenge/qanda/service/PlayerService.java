/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.service;

import com.challenge.qanda.model.Player;
import com.challenge.qanda.repository.PlayerRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author JehisonGalarza
 */
@Service
public class PlayerService {
    @Autowired
    private PlayerRepository playerRepository;

    public List<Player> getAllPlayers(){
        return playerRepository.getAllPlayers();
    }
    
    public Player createPlayer(Player player){       
        return playerRepository.createPlayer(player);   
    }
}
