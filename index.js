require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connection } = require("./db/db")
const {studentRouter} = require("../backend/route/student.route")
const {mentorRouter} =  require("../backend/route/mentor.route")
const app = express()

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 4560


app.use("/student",studentRouter)
app.use("/mentor",mentorRouter)



app.listen(PORT,async()=>{

    try{
       await connection;
       console.log(PORT)

    }catch(er){
        console.log(er)
    }

})