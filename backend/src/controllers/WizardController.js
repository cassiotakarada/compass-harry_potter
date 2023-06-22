const Wizard = require('../models/WizardData');

module.exports = {

    async read(request, response){
        const wizardList = await Wizard.find();

        return response.json(wizardList);
    },

    async create (request, response) {
        const { name, house, existance } = request.body;

        if (!name) {
            return response.status(400).json({error: "Wizard's name needed!"});
        }

        const wizardCreated = await Wizard.create({
            name,
            house,
            existance
        });

        return response.json(wizardCreated);
    }

}