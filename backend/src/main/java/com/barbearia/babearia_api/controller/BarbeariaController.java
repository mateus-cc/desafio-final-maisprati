package com.barbearia.babearia_api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.barbearia.babearia_api.model.Barbearia;
import com.barbearia.babearia_api.repository.BarbeariaRepository;

@RestController
@RequestMapping("/barbearias")
public class BarbeariaController {

    private final BarbeariaRepository repository;

    public BarbeariaController(BarbeariaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Barbearia> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Barbearia criar(@RequestBody Barbearia barbearia) {
        return repository.save(barbearia);
    }
}