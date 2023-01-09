const Person = require('../models/person.model');

module.exports.index = (req, res) => { //req = request, res = response
    res.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.json(err));
}