package com.barbearia.babearia_api.config;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.barbearia.babearia_api.model.Barbearia;
import com.barbearia.babearia_api.repository.BarbeariaRepository;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(BarbeariaRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                Barbearia b1 = new Barbearia();
                b1.setNome("Barbearia Navalha de Ouro");
                b1.setEndereco("Rua das Flores, 120 - Centro");
                b1.setTelefone("(19) 99999-1111");
                b1.setHorarioFuncionamento("Seg a Sáb: 09h às 20h");
                b1.setServicos("Corte R$ 40 | Barba R$ 30 | Combo R$ 65");

                Barbearia b2 = new Barbearia();
                b2.setNome("Dom Bigode Barber Shop");
                b2.setEndereco("Av. Brasil, 450 - Jardim Belvedere");
                b2.setTelefone("(19) 98888-2222");
                b2.setHorarioFuncionamento("Ter a Sáb: 10h às 21h");
                b2.setServicos("Corte Degradê R$ 45 | Barba R$ 35 | Sobrancelha R$ 15");

                Barbearia b3 = new Barbearia();
                b3.setNome("Corte & Estilo Clássico");
                b3.setEndereco("Rua São Pedro, 88 - Vila Nova");
                b3.setTelefone("(19) 97777-3333");
                b3.setHorarioFuncionamento("Seg a Sex: 08h às 19h");
                b3.setServicos("Corte Social R$ 35 | Barba Terapia R$ 40");

                repository.saveAll(List.of(b1, b2, b3));
            }
        };
    }
}