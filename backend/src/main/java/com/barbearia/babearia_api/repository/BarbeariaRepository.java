package com.barbearia.babearia_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.barbearia.babearia_api.model.Barbearia;

public interface BarbeariaRepository extends JpaRepository<Barbearia, Long> {
}