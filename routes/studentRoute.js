const express = require('express');
const router = express.Router();
const {
  deleteStudent,
  updateStudent,
  getAllStudent,
  insertStudent,
  getOneStudent,
} = require('../controllers/student');

router.get('/', getAllStudent);

router.post('/', insertStudent);

router.get('/:id', getOneStudent);

router.put('/:id', updateStudent);

module.exports = router;
