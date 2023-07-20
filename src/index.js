const express = require('express')
const https_server = require('https')
const fs = require('fs')

const app = express()
app.use(express.static('static'))
app.set('views', 'views/')
app.set('view engine', 'pug')

const { http, https, key, certificate } = require('../rsc/config.json')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(http, () => {
    log(`Http server running on port ${http}`)
})

const options = { key: fs.readFileSync(key), cert: fs.readFileSync(certificate) }
https_server.createServer(options).listen(https, () => {
    log(`Https server running on port ${https}`)
})

function log(message) {
    const time = new Date()
    console.log(`[${time.getHours()}:${time.getMinutes()}] ${message}`)
}