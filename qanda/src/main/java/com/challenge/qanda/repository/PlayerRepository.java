/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.repository;

import com.challenge.qanda.model.Player;
import com.challenge.qanda.repository.crud.PlayerCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author JehisonGalarza
 */
@Repository
public class PlayerRepository {
    @Autowired
    private PlayerCrudRepository playerCrudRepository;
    
    public Optional<Player> getLastPlayer(){
        return playerCrudRepository.findTop1ByIdPlayerDesc();
    }
    
    public List<Player> getAllPlayers(){
        return playerCrudRepository.findAll();
    }
    
    public Player createPlayer(Player player){
        return playerCrudRepository.save(player);
    }
}
