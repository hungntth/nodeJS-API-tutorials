const mongoose = require('mongoose');
require("dotenv").config()

async function connect() {

    try {
        await mongoose.connect(process.env.MONGO_URL), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        console.log("Connected to MongoDB!")
    } catch (error) {
        console.log("fail")
    }

}

module.exports = { connect };