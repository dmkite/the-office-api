const express = require('express')
const app = express()
// const router = express.Router()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.json())


const theofficeRouter = require('./routes/theoffice.routes')
app.use('/', theofficeRouter)

app.use('/ping', (req,res) =>{
    res.send(`we're in business`)
})
app.use((req,res,next) => {
    res.status(404).send('Not found')
})

app.use((err, req, res, next) =>{
    let status = err.status || 500
    res.status(status).send(err.message)
})

const listener = () => console.log(`party on port ${port}`)
app.listen(port, listener)

module.exports = app