const mongoose = require('mongoose');

const WizardDataSchema = new mongoose.Schema({
    name: String,
    house: String,
    existance: Boolean
});

module.exports = mongoose.model('Wizard', WizardDataSchema);