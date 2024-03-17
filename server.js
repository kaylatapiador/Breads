const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
//console.log(PORT)
const app = express()
const methodOverride = require('method-override')

app.use(express.static('public'))

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))


app.get('/',(req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controllers/bread_controller.js')
app.use('/breads',breadsController)

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

app.get('*',(req,res) => {
    res.send('404')
})

app.set('views', __dirname + '/views')
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())