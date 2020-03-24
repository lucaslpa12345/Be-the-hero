const express = require('express')
const routes = express.Router()
const incidentControl = require('./controllers/incidentsContro')
const ongsController = require('./controllers/OngController')
const profile = require('./controllers/profile')
const sessioncontroller = require('./controllers/sessioncontroller')


routes.get('/ongs', ongsController.list)   
routes.post('/ongs', ongsController.create )

routes.get('/incidents', incidentControl.list)
routes.post('/incidents', incidentControl.create ) 
routes.delete('/incidents/:id', incidentControl.delete)

routes.get('/perfil', profile.profile )

routes.post('/session', sessioncontroller.session)


module.exports = routes;
