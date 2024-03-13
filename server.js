const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
//console.log(PORT)
const app = express()

app.get('/',(req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controllers/bread_controller.js')
app.use('/breads',breadsController)

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

app.set('views', __dirname + '/views')
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())