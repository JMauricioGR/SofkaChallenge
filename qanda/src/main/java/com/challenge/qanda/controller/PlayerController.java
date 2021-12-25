/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.challenge.qanda.controller;

import com.challenge.qanda.model.Player;
import com.challenge.qanda.service.PlayerService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author JehisonGalarza
 */
@RestController
@RequestMapping("/api/player/")
@CrossOrigin("*")
public class PlayerController {
    @Autowired
    private PlayerService playerService;
    
    @GetMapping("last")
    public Optional<Player> getLastPlayer(){
        return playerService.getLastPlayer();
    }
    
    @GetMapping("all")
    public List<Player> getAllPlayers(){
        return playerService.getAllPlayers();
    }
    
    @PostMapping("new")
    @ResponseStatus(HttpStatus.CREATED)
    public Player createplayer(Player player){
        return playerService.createPlayer(player);
    }
}
