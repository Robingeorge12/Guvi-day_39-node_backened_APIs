const mongoose =  require("mongoose");

const MentorSchema = new mongoose.Schema({
  mentor_name: { type: String, required: true },
  mentor_id: { type: String, required: true }, 
  mentor_batch: [
                {
                batch_name:{type: String,required: true},
                batch_code:{type: String,required: true}
                }],
  mentor_topics :[{topic:{type:String,required:true}}]
  
});

const Mentor = mongoose.model("Mentor", MentorSchema);

// export default Mentor
module.exports = { Mentor}





