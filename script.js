const express = require('express');
const script = express();

const PORT = process.env.PORT || 8080;

script.get('/equips', (req,res)=>{
  res.json({
    cpu:"AMD Ryzen 1700",
    gpu:'Galax GTC',
    mouse: 'Logitech',
  })
})


script.get('/about', (req, res) => {
  res.json({
    Nome: 'Donizete',
    email: 'fulando@gmail.com',
    github: 'http://github.com',
  })
})

script.get('/', (req, res) => {
  res.json({
    msg: 'OK'
  })
})
script.listen(PORT, () => {
  console.log('Servidor Rodando' + PORT);
})