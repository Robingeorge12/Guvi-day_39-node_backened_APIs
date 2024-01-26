const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect(process.env.MONGO_URL)

module.exports = {connection}



// ,{
//   serverSelectionTimeoutMS: 10000,
//   socketTimeoutMS: 45000,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }