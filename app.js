const dotenv = require("dotenv")
dotenv.config()

const  express = require('express')
const app = express()
const databaseConnection = require("./database/connection")
const routes = require("./routes/studentRoute")

const port = process.env.PORT

databaseConnection()
app.use(express.json())

app.use("/student",routes)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})