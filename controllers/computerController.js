const Computer = require('../models/computers');//model
const ResponseService = require('../utils/ResponseService'); // Response service

exports.createNew = (req, res) => {

    let newcomputer = new Computer(req.body);
    newcomputer.save((err) => {
        ResponseService.generalResponse(err, res, 'new computer created successfully');
    });
};

exports.getAll = (async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const _count = await Computer.countDocuments();
    const totalPages = Math.ceil(_count / limit);

    Computer.find((err, doc) => {
        const newPayload = {
            docs: doc,
            totalPages: totalPages,
            totalpost: _count
        }
        ResponseService.generalPayloadResponse(err, newPayload, res);
    }).sort({ addedOn: -1 })
        .skip(page * limit).limit(limit);
});

exports.updateById = (req, res) => {
    Computer.findByIdAndUpdate(
        req.params.id,
        {
           $set:req.body
        }, (err, doc) => {
            ResponseService.generalResponse(err, res, 'computer updated successfully');
        });
};

exports.deleteById = (req, res, next) => {
    Computer.findByIdAndRemove(
        req.params.id,
        {
           $set:req.body
        }, (err, doc) => {
            ResponseService.generalResponse(err, res, 'computer deleted successfully');
        });
};