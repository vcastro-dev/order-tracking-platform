🏗️ Plataforma de Processamento de Pedidos & Rastreamento
Este projeto é uma plataforma de processamento de pedidos e rastreamento em tempo real, desenvolvida para demonstrar a construção de sistemas modernos, escaláveis e resilientes. A arquitetura é baseada em microserviços, mensageria assíncrona e princípios de Domain-Driven Design (DDD).

🎯 Objetivo e Proposta de Valor
O objetivo principal é simular um sistema de e-commerce que recebe um pedido, o processa, envia notificações e permite o rastreamento em tempo real. O projeto serve como um case prático para demonstrar experiência em:

Arquitetura Limpa (Hexagonal) & DDD: Desenho do software focado na lógica de negócio, desacoplando a aplicação da infraestrutura.

Arquitetura Orientada a Eventos: Comunicação assíncrona e desacoplada entre serviços via Kafka.

Microserviços: Divisão de responsabilidades em serviços autônomos.

Observabilidade: Monitoramento e rastreamento distribuído com OpenTelemetry, Prometheus e Grafana.

Persistência Híbrida: Uso estratégico de bancos de dados relacionais (PostgreSQL) para persistência de dados críticos e não-relacionais (Redis) para caching de alta velocidade.

Boas Práticas de Engenharia: Contêineres, testes unitários, e preparação para CI/CD.

🧩 Arquitetura do Sistema
A comunicação entre os serviços é orquestrada por meio de eventos no Kafka. Cada serviço é uma unidade independente, focada em uma única responsabilidade de negócio.

Serviços
API Gateway: Ponto de entrada da aplicação. Recebe novos pedidos via HTTP e publica um evento order.created no tópico do Kafka.

Order Service: Consome o evento order.created, valida o pedido, calcula o estoque (simulado) e persiste o pedido no PostgreSQL. Após o processamento, publica o evento order.processed.

Tracking Service: Mantém o status do pedido em tempo real no Redis e o histórico de rastreamento no PostgreSQL. Expõe um endpoint de WebSocket para atualizações em tempo real.

Notification Service: Consome o evento order.processed e simula o envio de e-mail ou notificação.

Dashboard (React): Interface de usuário que permite criar pedidos e visualizar o status de rastreamento em tempo real.

Infraestrutura
Kafka: Broker de mensagens para a comunicação assíncrona.

PostgreSQL: Banco de dados relacional para a persistência de dados críticos (pedidos, histórico de rastreamento).

Redis: Banco de dados em memória para caching e armazenamento de dados de rastreamento em tempo real.

Prometheus & Grafana: Coleta e visualização de métricas de performance e saúde da aplicação.

OpenTelemetry: Ferramenta para rastreamento distribuído entre os serviços, essencial para depuração em arquiteturas de microsserviços.

📦 Estrutura do Repositório (Monorepo)
O projeto utiliza um monorepo para facilitar a gestão de múltiplos serviços e o compartilhamento de código entre eles.

.
├── apps
│ ├── api-gateway
│ ├── order-service
│ ├── tracking-service
│ ├── notification-service
│ └── dashboard
└── libs
├── shared-events # Contratos e tipos de eventos
├── shared-db # Configuração comum de banco de dados
└── shared-utils # Funções utilitárias
🚀 Tecnologias Principais
Backend: NestJS

Frontend: React

Mensageria: Kafka

Banco de Dados: PostgreSQL & Redis

Monitoramento: Prometheus & Grafana

Rastreamento: OpenTelemetry

Ferramentas: Docker, pnpm, Nx

🛠️ Como Rodar Localmente
Pré-requisitos: Certifique-se de ter Docker e Docker Compose instalados.

Clone o Repositório: git clone [url-do-seu-repositorio]

Crie os Arquivos de Ambiente: Crie um arquivo .env na raiz do projeto com suas variáveis de ambiente locais (ex: POSTGRES_USER=dev_user).

Inicie os Contêineres: Execute o comando a seguir na raiz do repositório para subir toda a infraestrutura e os serviços de desenvolvimento:

Bash

docker-compose up --build
Acesse a Aplicação:

API Gateway: http://localhost:3000

Dashboard: http://localhost:3001 (ou a porta que você configurou)

Grafana: http://localhost:3002 (ou a porta que você configurou)

📌 O que este projeto demonstra
Este projeto é uma prova prática de habilidades em engenharia de software, mostrando a capacidade de:

Arquitetar e implementar sistemas complexos e distribuídos.

Aplicar princípios de design avançados como DDD e Arquitetura Limpa (Hexagonal).

Utilizar mensageria para desacoplar serviços e garantir a resiliência do sistema.

Trabalhar com múltiplos bancos de dados e otimizar o acesso a dados.

Configurar e gerenciar a infraestrutura com Docker e Docker Compose.

Garantir a observabilidade de uma arquitetura de microsserviços.

Escrever código de alta qualidade, modular e testável.
