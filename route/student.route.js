const { Router } = require("express");
const {
  getStudent_list,
  postStudent_data,
  patchtStudent_data,
  add_studentFields,
  deleteStudent_data,
  getStudents_of_Particular_Mentor,
  getFormer_Mentor,
  getStudents_unAssigned,
  add__multipleStudent_One_Mentor,
} = require("../controller/student.controller");

const studentRouter = Router();

studentRouter.get("/", getStudent_list);

studentRouter.get("/mentor/:id", getStudents_of_Particular_Mentor);

studentRouter.get("/unassigned", getStudents_unAssigned);

studentRouter.get("/former/:id", getFormer_Mentor);

studentRouter.post("/add_students", postStudent_data);
studentRouter.patch("/:edit_id", patchtStudent_data);

// studentRouter.patch("/add/addfield", add_studentFields);

studentRouter.delete("/:id", deleteStudent_data)

studentRouter.patch("/multiple_students", add__multipleStudent_One_Mentor);



;

// get(url//student/mentor/${id})

module.exports = { studentRouter };
