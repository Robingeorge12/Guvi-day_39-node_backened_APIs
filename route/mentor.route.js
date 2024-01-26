const {Router} = require("express")
const { getMentor_list, postMentor_data, deleteMentor_data } = require("../controller/mentor.controller.js")

const mentorRouter = Router()

mentorRouter.get("/",getMentor_list)
mentorRouter.post("/add_mentor",postMentor_data)
mentorRouter.delete("/:id",deleteMentor_data)


module.exports = {mentorRouter}