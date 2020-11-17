const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

//Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes
app.use(require('./routes/tasksRoutes'))

module.exports = app