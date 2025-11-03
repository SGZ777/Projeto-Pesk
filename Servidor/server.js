const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.json())
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Puxa as rotas do a serem utilizadas pelo servidor
const rotaCatalogo = require('./Back-end/rotas/catalogo')
const rotaEntrar = require('./Back-end/rotas/login')
const rotaCarrinho = require('./Back-end/rotas/carrinho')


const logger = require('./Back-end/middlewares/logger')

app.use('/catalogo', rotaCatalogo)
app.use('/entrar', rotaEntrar)
app.use('/carrinho', rotaCarrinho)
// Define as rotas para o servidor

app.use(express.json())
app.use(logger)
app.use(express.static(path.join(__dirname, 'Front-end')))

app.use('/catalogo', rotaCatalogo)
app.use('/entrar', rotaEntrar)

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'Front-end', 'home.html'))
})

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})