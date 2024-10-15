const express = require('express')
const cors = require('cors');
const {enviarData} = require('./rabbitmq/send')

const app = express()
const PORT = 3000;

app.use(express.json())
app.use(cors());


app.post('/calcular', function (req, res) {
    console.log(req)
    const { adultos, criancas, duracao, data } = req.body;

    const carnePessoa = duracao >= 6 ? 650 : 400;
    const cervejaPessoa = duracao >= 6 ? 2000 : 1200;
    const bebidasPessoa = duracao >= 6 ? 1500 : 1000;

    const quantidadeTotalCarne = carnePessoa * adultos + (carnePessoa / 2 * criancas);
    const quantidadeTotalCerveja = cervejaPessoa * adultos;
    const quantidadeTotalBebidas = bebidasPessoa * adultos + (bebidasPessoa / 2 * criancas);

    enviarData(data)

    res.json({ 
        carne: (quantidadeTotalCarne/1000),
        cerveja: Math.ceil(quantidadeTotalCerveja/355),
        bebidas: Math.ceil(quantidadeTotalBebidas/2000)
    })
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})