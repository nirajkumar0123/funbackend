require('dotenv').config();
const express = require('express')
const app = express()
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=> {
    res.send('nirajkumar')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please subscribe my youtube channel</h1>')
})

app.get('/instagram', (req, res)=> {
    res.send('<h1>Visit my instagram</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})