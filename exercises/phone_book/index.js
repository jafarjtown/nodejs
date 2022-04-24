const express = require('express')
const PORT = 5000
const {contacts} = require('./controllers/contactController')
const morgan = require('morgan')
const app = express()
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/persons', require('./routes/contactRoute'))
app.get('/info', (req, res) => {
    res.send(`
    <p>Phonebook has info ${ contacts.length } people</p>
    <p>${ new Date() }</p>
    `)
})

app.listen(PORT, ()=> console.log('server started'))