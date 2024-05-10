const {

  updateStudentService,
  getOneStudentService,
  getAllStudentService,
  insertStudentService,
} = require('../services/student');

const getAllStudent = async (req, res) => {
  try {
    const student = await getAllStudentService();
    res.status(200).json({ student });
  } catch (error) {
    console.log(error);
  }
};

const insertStudent = async (req, res) => {
  try {
    const student = await insertStudentService(req.body);
    res.json({ message: 'Student created.' });
  } catch (error) {
    console.log(error);
  }
};

const getOneStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await getOneStudentService(id);
    res.json({ student });
  } catch (error) {
    console.log(error);
  }
};

const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await updateStudentService(req.body, id);
    res.json({ student });
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  getAllStudent,
  insertStudent,
  getOneStudent,
  updateStudent,
 
};
