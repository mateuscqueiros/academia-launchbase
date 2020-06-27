const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')

routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index")
})

routes.get('/members', function(req, res) {

    return res.send("members")
})

routes.get("/instructors/create", function(req, res) {
    return res.render("instructors/create")
})

routes.post("/instructors", instructors.post)

module.exports = routes