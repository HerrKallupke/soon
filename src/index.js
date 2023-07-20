const express = require('express')
const app = express()
app.use(express.static('static'))
app.set('views', 'views/')
app.set('view engine', 'pug')

const { port } = require('../rsc/config.json')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    log(`Server running on port ${port}`)
})

function log(message) {
    const time = new Date()
    console.log(`[${time.getHours()}:${time.getMinutes()}] ${message}`)
}