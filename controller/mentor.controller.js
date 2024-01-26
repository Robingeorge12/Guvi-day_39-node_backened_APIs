const {Mentor} = require("../model/mentor.model.js");

const getMentor_list = async (req, res) => {
  try {
  
    const mentors = await Mentor.find();

    res.status(200).send({ message: mentors });
  } catch (er) {
    console.log(er);
  }
};

const postMentor_data = async (req, res) => {
  try {
    console.log(req.body);

    //   const mentors = await Mentor.insertOne(req.body);
    // const mentors = await Mentor.insertMany(req.body);
    // console.log(mentors);
    const mentors = new Mentor(req.body);
    await mentors.save();
    res.status(200).send({ message: mentors });
  } catch (er) {
    console.log("er", er);
    res.status(500).send({ message: er }); 
  } 
};

const deleteMentor_data = async(req,res)=>{

  try{
    console.log(req.params.id)
    const {id} = req.params

    let deleteMentor = await Mentor.deleteOne({_id:id})
    res.status(201).send({message:deleteMentor})

  }catch(er){
    console.log(er)
    res.status(500).send({message:er})
  }
}


module.exports = { getMentor_list, postMentor_data ,deleteMentor_data};
