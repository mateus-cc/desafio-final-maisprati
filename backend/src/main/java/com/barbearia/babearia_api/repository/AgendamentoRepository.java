package com.barbearia.babearia_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.barbearia.babearia_api.model.Agendamento;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
}