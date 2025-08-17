# 🏗️ Order Processing & Tracking Platform

Este projeto é uma simulação de uma **plataforma de processamento de pedidos e rastreamento em tempo real**, desenvolvida para praticar conceitos de **arquitetura de software moderna**, **microserviços** e **aplicações de larga escala**.

---

### 🎯 Objetivo e Proposta de Valor

Demonstrar experiência em:

- **Arquitetura Limpa (Hexagonal) & DDD:** Desenho do software focado na lógica de negócio, desacoplando a aplicação da infraestrutura.
- **NestJS avançado** no backend.
- **Arquitetura orientada a eventos** e **mensageria** (Kafka).
- **Microserviços desacoplados.**
- **Bancos de dados relacionais e não-relacionais** (PostgreSQL + Redis).
- **Observabilidade e tracing distribuído** (OpenTelemetry, Prometheus + Grafana).
- **Escalabilidade horizontal simulada.**
- **Boas práticas de engenharia de software** (testes, CI/CD, logging estruturado).

---

### 🧩 Arquitetura

A comunicação entre os serviços é orquestrada por meio de eventos no Kafka. Cada serviço é uma unidade independente, focada em uma única responsabilidade de negócio.

**Serviços principais:**

- **API Gateway** → Recebe pedidos e publica eventos `order.created` no Kafka.
- **Order Service** → Processa pedidos, valida estoque e salva no PostgreSQL. Publica `order.processed`.
- **Notification Service** → Consome eventos e envia notificações.
- **Tracking Service** → Gerencia status do pedido (Redis + PostgreSQL) e atualiza o frontend via WebSocket.
- **Dashboard (React)** → Consulta pedidos e status em tempo real.

**Infraestrutura:**

- **Kafka** → Mensageria para comunicação assíncrona.
- **PostgreSQL** → Persistência principal.
- **Redis** → Cache para consultas rápidas.
- **Prometheus + Grafana** → Métricas e monitoramento.
- **OpenTelemetry** → Tracing distribuído.

---

### 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [Kafka](https://kafka.apache.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [React](https://react.dev/)
- [Prometheus](https://prometheus.io/) + [Grafana](https://grafana.com/)
- [OpenTelemetry](https://opentelemetry.io/)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- [Nx](https://nx.dev/) ou [Turborepo](https://turborepo.org/)

---

### 📦 Estrutura do repositório (monorepo)

```bash
.
├── apps
│   ├── api-gateway
│   ├── order-service
│   ├── notification-service
│   ├── tracking-service
│   └── dashboard
└── libs
    ├── shared-events     # contratos de eventos
    ├── shared-db         # configuração DB comum
    └── shared-utils      # utilitários
```
