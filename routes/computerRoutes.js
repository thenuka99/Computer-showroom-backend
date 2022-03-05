const express = require('express');
const router = express.Router();

//controller
computerController = require('../controllers/computerController');

//router - /v1/computers/
//create
router.route('/').post(computerController.createNew);

//get all
router.route('/').get(computerController.getAll);

//router - /v1/computers/id
//update by id
router.route('/:id').put(computerController.updateById);

//delete by id
router.route('/:id').delete(computerController.deleteById);



module.exports=router;