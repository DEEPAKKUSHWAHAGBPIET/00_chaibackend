require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
     res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
     res.send("deepakdotcom")
})

app.get('/login', (req,res) => {
     res.send('<h1> Login page hai bhai ye.... </h1>')
})
app.listen(process.env.PORT, () => {
     console.log(`app is listining at port no ${process.env.PORT}`)
})