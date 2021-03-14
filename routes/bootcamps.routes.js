const express = require('express');
const bootcampRouter = express.Router();

const {
  getBootcamps,
  createBootcamps,
  updateBootcamps,
  deleteBootcamps
} = require('../controllers/bootcampController');

bootcampRouter
  .route('/')
  .get(getBootcamps)
  .post(createBootcamps);

bootcampRouter
  .route('/:id')
  .get(getBootcamps)
  .put(updateBootcamps)
  .delete(deleteBootcamps);

module.exports = bootcampRouter;