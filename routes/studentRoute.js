const express = require("express")
const routes = express.Router()
const {deleteStudentDoc,updateStudentDoc,createStudentDoc,viewAllStudentDoc,viewSingleStudentDoc} = require("../controllers/studentController")


routes.get("/",viewAllStudentDoc)

routes.get("/:id",viewSingleStudentDoc)

routes.post("/",createStudentDoc)

routes.put("/",updateStudentDoc)

routes.delete("/",deleteStudentDoc)

module.exports = routes


