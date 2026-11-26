# 💈 BarberPro — Plataforma de Agendamento para Barbearias

O **BarberPro** é uma aplicação web **full-stack** desenvolvida como desafio final do programa **+PraTi**. A plataforma conecta clientes e barbearias, permitindo localizar estabelecimentos próximos via CEP, consultar serviços e preços e realizar ou cancelar agendamentos online em tempo real.

---

## 🚀 Funcionalidades

- **Fluxo de Autenticação e Cadastro:** Telas de Login e Cadastro em etapas separadas para **Clientes** e **Proprietários de Barbearias**.
- **Busca por Região (API ViaCEP):** Consulta o CEP informado pelo usuário para exibir bairro, cidade/UF e a distância estimada até as barbearias.
- **Catálogo de Barbearias:** Listagem dinâmica carregada diretamente do banco de dados MySQL (com carga inicial automática via `DataLoader`).
- **Gestão de Agendamentos (CRUD):** Criação de novos agendamentos vinculados à barbearia escolhida, listagem em tempo real e cancelamento com remoção direta no banco.

---

## 🛠️ Tecnologias Utilizadas

### Back-end
- **Java** & **Spring Boot**
- **Spring Data JPA** (persistência de dados)
- **Spring Security** (configuração de CORS e liberação de endpoints)
- **Lombok**

### Front-end
- **React** + **Vite**
- **React Router**
- **Tailwind CSS**
- **Lucide React** (ícones)

### Banco de Dados, Infraestrutura e Integrações
- **MySQL 8.0**
- **Docker** & **Docker Compose**
- **API Externa:** [ViaCEP](https://viacep.com.br/)

---

## 📁 Estrutura do Projeto

```text
desafio-final-maisprati/
├── backend/          # API REST em Java + Spring Boot
├── frontend/         # Interface web em React + Vite + Tailwind CSS
├── database/         # Scripts iniciais do banco de dados
├── docs/             # Documentação do projeto
└── docker-compose.yml
