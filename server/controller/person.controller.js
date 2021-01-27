const { Person } = require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}

module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(Person=>response.json(Person))
        .catch(err=>response.json(err))
}

module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err));
    }