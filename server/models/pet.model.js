const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        minlength: [3, "Pet name must have 3 or more characters!"]
    },
    petType: {
        type: String,
        minlength: [3, "Pet type must have 3 or more characters!"]
    },
    petDescription: {
        type: String,
        minlength: [3, "Pet description must have 3 or more characters!"]
    },
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String}

}, {timestamps: true});

module.exports.Pet = mongoose.model("Pet", PetSchema);