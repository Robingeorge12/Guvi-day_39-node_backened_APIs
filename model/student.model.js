const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({

    student_name :{type:String, required:true},
    student_mentor_id:{type:String,default:null},
    
    student_mentor_mongoId:{type:String,default:null},
    student_id: {type:Number}, 
    student_course: {type:String,required:true},
    student_former_mentor: {type:String,default:null},
    student_current_mentor: {type:String,default:null },
    student_task_status: {type:String, enum:["Pending","Completed"],default:"Pending"},

})

const StudentModel = mongoose.model("student_data",StudentSchema)

module.exports = {StudentModel} 