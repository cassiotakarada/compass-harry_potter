const express = require('express');
const routes = express.Router();

const WizardController = require('./controllers/WizardController');

//Route Wizard
routes.post('/wizards', WizardController.create);
routes.get('/wizards', WizardController.read);  

module.exports = routes;