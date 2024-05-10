const Student = require('../models/studentModel');

const getAllStudentService = async () => {
  try {
    const student = Student.findAll();
    return student;
  } catch (error) {
    console.log(error);
  }
};

const insertStudentService = async (body) => {
  try {
    const { name, email } = body;
    const student = await Student.create({ name, email });
  } catch (error) {
    console.log(error);
  }
};

const getOneStudentService = async (id) => {
  try {
    const student = await Student.findByPk(id);
    return student;
  } catch (error) {
    console.log(error);
  }
};

const updateStudentService = async (body, id) =>   {
  try {
    const { name, email } = body;
    const [student] = await Student.update({ name, email }, { where: { id } });
    return student;
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  updateStudentService,
  getAllStudentService,
  insertStudentService,
  getOneStudentService,
};
