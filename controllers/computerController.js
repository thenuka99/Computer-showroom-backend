const Computer = require('../models/computers');

exports.createNew = (req, res, next) => {
    res.send('create new computer route');
};

exports.getAll = (req, res, next) => {
    res.send('get all computer routes');
};

exports.updateById = (req, res, next) => {
    res.send('update computer route');
};

exports.deleteById = (req, res, next) => {
    res.send('delete computer route');
};