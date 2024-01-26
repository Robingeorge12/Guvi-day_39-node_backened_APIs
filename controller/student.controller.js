const { StudentModel } = require("../model/student.model");
const { Mentor } = require("../model/mentor.model.js");

const getStudent_list = async (req, res) => {
  try {
    const students = await StudentModel.find();
    // console.log(students);
    res.status(200).send({ message: students });
  } catch (er) {
    console.log(er);
    res.status(500).send({ message: er });
  }
};

const getStudents_of_Particular_Mentor = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const students = await StudentModel.find({ student_mentor_id: id });
    console.log(students);

    res.status(200).send({ message: students });
  } catch (er) {
    console.log(er);
    res.status(500).send({ message: er });
  }
};

const getStudents_unAssigned = async (req, res) => {
  try {
    const students = await StudentModel.find(
      {},
      { student_current_mentor: "" }
    );
    // console.log(students);
    res.status(200).send({ message: students });
  } catch (er) {
    console.log(er);
    res.status(500).send({ message: er });
  }
};

const getFormer_Mentor = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const students = await StudentModel.findOne({ _id: id });
    let former_mentor = students.student_former_mentor;
    console.log(students.student_former_mentor);

    if (former_mentor) {
      res.status(200).send({ message: former_mentor });
    } else {
      res.status(200).send({ message: "No former mentor for his student" });
    }
  } catch (er) {
    console.log(er);
    res.status(500).send({ message: er });
  }
};

const postStudent_data = async (req, res) => {
  try {
    console.log(req.body);
    const students = await StudentModel.insertMany([req.body]);
    console.log(students);
    res.status(200).send({ message: students });
  } catch (er) {
    console.log(er);
    res.status(500).send({ message: er });
  }
};

const patchtStudent_data = async (req, res) => {
  try {
    const { edit_id } = req.params;

    const { student_current_mentor, mentor_id } = req.body;
    console.log(student_current_mentor, mentor_id);

    let student = await StudentModel.findOne({ _id: edit_id });
    console.log(mentor_id, student);
    // let mentor_id_from_student = student.student_mentor_id
    // console.log(mentor_id_fromStudent)
    let mentorDetails = await Mentor.findOne({ mentor_id: mentor_id });
    console.log(mentorDetails);

    if (
      student_current_mentor === mentorDetails.mentor_name &&
      mentor_id === mentorDetails.mentor_id &&
      student.student_current_mentor !== student_current_mentor &&
      student
    ) {
      let former_mentor = await StudentModel.updateOne(
        { _id: student._id },
        { $set: { student_former_mentor: student.student_current_mentor } }
      );
    }

    const students = await StudentModel.updateOne(
      { _id: student._id },
      {
        $set: {
          student_mentor_id: mentor_id,
          student_mentor_mongoId: mentorDetails._id,
          student_current_mentor: student_current_mentor,
        },
      }
    );
    console.log(students);
    res.status(200).send({ message: students });
  } catch (er) {
    console.log(er);
    res.status(500).send({ message: er });
  }
};

const add_studentFields = async (req, res) => {
  try {
    console.log(req.params);
    let addField_Student = await StudentModel.updateMany(
      {},
      { $set: { batch_name: "B53" } },
      { upsert: true }
    );
    res.status(201).send({ message: addField_Student });
  } catch (er) {
    console.log(er);
    res.status(500).send({ message: er });
  }
};

const deleteStudent_data = async (req, res) => {
  try {
    console.log(req.params.id);
    const { id } = req.params;

    let deleteStudent = await StudentModel.deleteOne({ _id: id });
    res.status(201).send({ message: deleteStudent });
  } catch (er) {
    console.log(er);
    res.status(500).send({ message: er });
  }
};

const add__multipleStudent_One_Mentor = async (req, res) => {
  try {
    // console.log(student_id , student_id);
    const { mentor_id } = req.body;
    // const {id} = req.params
    // console.log(mentor_id )
    let mentor = await Mentor.findOne({ "mentor_id": mentor_id});
    // console.log(mentor.mentor_name,mentor )
    let studentsAll = await StudentModel.find();


    let assign = await Promise.all(studentsAll.map((el, i) => {
   
      if (el.student_current_mentor === null) {
        // console.log(el.student_current_mentor)
         return StudentModel.findOneAndUpdate(
          { _id: el._id },
          {
            $set: {
              "student_current_mentor": mentor.mentor_name,
              "student_mentor_id": mentor.mentor_id,
            },
          }
          
        );
      }
    }));

    // let student = await find({}, { batch_name: batch_name });

    // for(i=0;i<student.length;i++){
    //   await student[i].updateOne({"_id":student[i]._id},{$set:
    //     {"student_current_mentor":cvv}})
    // }

    // console.log(students);
    res.status(200).send({ message: assign+"Assigned all student to particular Mentor" });
  } catch (er) {
    console.log(er);
    res.status(500).send({ message: er });
  }
};

// const change_students_To_oneMentor = (req,res)=>{

//   const {x} = req.body;


// }

module.exports = {
  getStudent_list,
  postStudent_data,
  patchtStudent_data,
  deleteStudent_data,
  add_studentFields,
  getStudents_of_Particular_Mentor,
  getFormer_Mentor,
  getStudents_unAssigned,
  add__multipleStudent_One_Mentor,
};
