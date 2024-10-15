# Churrascômetro - Sistema Distribuído

Este projeto consiste em um sistema distribuído para calcular a quantidade necessária de bebidas e carnes para um churrasco, com base em dados fornecidos pelo usuário. O sistema é dividido em duas partes principais: frontend e backend.

## Backend

No backend, temos um servidor responsável por calcular a quantidade total de:

- Bebidas alcoólicas (cerveja)
- Bebidas não alcoólicas
- Carne

Os cálculos são baseados na duração do evento, na quantidade de adultos e de crianças presentes. Além disso, o backend inclui uma pasta chamada `rabbitmq`, que contém dois arquivos:

- **send**: envia a data do churrasco para o broker RabbitMQ.
- **receive**: consome a data do churrasco do broker.
