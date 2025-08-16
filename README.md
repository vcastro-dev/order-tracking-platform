# 🏗️ Order Processing & Tracking Platform

Este projeto é uma simulação de uma **plataforma de processamento de pedidos e rastreamento em tempo real**, desenvolvida para praticar conceitos de **arquitetura de software moderna**, **microserviços** e **aplicações de larga escala**.

---

## 🎯 Objetivo

Demonstrar experiência em:

- **NestJS avançado** no backend
- **Arquitetura orientada a eventos**
- **Mensageria** (Kafka)
- **Microserviços desacoplados**
- **Bancos de dados relacionais e não-relacionais** (PostgreSQL + Redis)
- **Observabilidade e tracing distribuído**
- **Escalabilidade horizontal simulada**
- **Boas práticas de engenharia de software** (testes, CI/CD, logging estruturado)

---

## 🧩 Arquitetura

**Serviços principais:**

- **API Gateway** → Recebe pedidos e publica eventos `order.created`
- **Order Processing Service** → Processa pedidos, valida estoque e salva no PostgreSQL
- **Notification Service** → Consome eventos e envia notificações
- **Tracking Service** → Gerencia status do pedido (Redis + PostgreSQL)
- **Dashboard (React)** → Consulta pedidos e status em tempo real

**Infraestrutura:**

- **Kafka** → Mensageria para comunicação assíncrona
- **PostgreSQL** → Persistência principal
- **Redis** → Cache para consultas rápidas
- **Prometheus + Grafana** → Métricas e monitoramento
- **OpenTelemetry** → Tracing distribuído

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [Kafka](https://kafka.apache.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [React](https://react.dev/)
- [Prometheus](https://prometheus.io/) + [Grafana](https://grafana.com/)
- [OpenTelemetry](https://opentelemetry.io/)

---

## 📦 Estrutura do repositório (monorepo)

```bash
.
├── apps
│   ├── api-gateway
│   ├── order-service
│   ├── notification-service
│   ├── tracking-service
│   └── dashboard
└── libs
    ├── shared-kafka   # contratos de eventos
    ├── shared-db      # configuração DB comum
    └── shared-utils   # utilitários
```
