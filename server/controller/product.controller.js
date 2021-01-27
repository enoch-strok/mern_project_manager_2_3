const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(Product=>response.json(Product))
        .catch(err=>response.json(err))
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err));
    }

module.exports.getOneProducts = (request, response) => {
    Product.find({_id: request.params.id})
        .then(products => response.json(products))
        .catch(err => response.json(err));
    }
