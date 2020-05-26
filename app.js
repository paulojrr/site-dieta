const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const dbConfig = require('./app/config/database-config')
const User = require('./app/models/User')
const connection = new Sequelize(dbConfig)


const app = express()

// Load User model
User.init(connection)

// Load routes
const indexRoute = require('./app/routes/index-route')

// bodyParser
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

// Load ejs, view path
app.set('view engine', 'ejs')
app.set('views', './app/views')

// app.use(expressLayouts)

// Set static route for public
app.use(express.static(__dirname + '/public'))

app.use('/', indexRoute)

// Load server
app.listen(5000, function () {
    console.log("Server running in port 5000!")
});


module.exports = connection
