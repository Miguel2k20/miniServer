const http = require('http');
const express = require('express')
const aplication = express()
const servidor = http.createServer(aplication)
aplication.use(express.static('site'))
servidor.listen(4060)