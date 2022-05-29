const express = require("express")
require("dotenv").config()
const app = express()
const helmet = require("helmet")
const morgan = require("morgan")
const port = process.env.PORT || 5000
const userRoute = require("./Routes/users")
const authRoute = require("./Routes/auth")

// connect db
require("./config/db").connect()

//middleware
app.use(express.json())
// app.use(helmet())
app.use(morgan("common"))

// route
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

app.listen(port, () => console.log(`app listen port ${port}`))