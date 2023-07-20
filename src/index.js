const express = require('express')
const https = require('https')
const fs = require('fs')

const app = express()
app.use(express.static('static'))
app.set('views', 'views/')
app.set('view engine', 'pug')

const { http_port } = require('../rsc/config.json')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(http_port, () => {
    log(`Http server running on port ${http_port}`)
})

function log(message) {
    const time = new Date()
    console.log(`[${time.getHours()}:${time.getMinutes()}] ${message}`)
}