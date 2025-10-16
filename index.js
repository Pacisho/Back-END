const express = require('express')
const app = express()
const port = 3005

// API WEB SERVICE STATUS
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// API SUSERS MANAGEMENT
app.get('/users/', (req, res) => {
    res.send('GET USERS DATA')
})

app.get('/users/:id', (req, res) => {
   res.send(req.params)
})

app.put('/users/:id', (req, res) => {
    res.send(req.params)
})

app.delete('/users/:id', (req, res) => {
    res.send(req.params)
})

app.post('/users/', (req, res) => {
    res.send('Awin')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})