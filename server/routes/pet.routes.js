const petController = require('../controller/pet.controller');

module.exports = function(app){
    app.post('/api/pet', petController.createPet);

    app.get('/api/pet', petController.getAllPets);

    app.get('/api/pet/:id', petController.getOnePet);
    app.put('/api/pet/:id', petController.updatePet);
    app.delete('/api/pet/:id', petController.deletePet);
}