const express = require("express");
const router = express.Router();
const validateStudent = require("../middleware/validator");
const {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const { roleBasedAccess } = require("../middleware/adminvalidation");


router.get("/", roleBasedAccess(['Admin', 'Teacher']), getAllStudents);

router.post("/", roleBasedAccess(['Admin']), validateStudent, addStudent);


router.put("/:id", roleBasedAccess(['Admin', 'Teacher']), validateStudent, updateStudent);


router.delete("/:id", roleBasedAccess(['Admin']), deleteStudent);

module.exports = router;
