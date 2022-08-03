const studentModel = require("../models/studentModel")

const viewAllStudentDoc = (req,res) =>{
    studentModel.find({},{__v:0})
    .then(
        (response) =>{
            res.send(response)
        }
    )
}

const viewSingleStudentDoc = (req,res) =>{
    const id = req.params.id
    studentModel.findById(id,{__v:0})
    .then(
        (response) =>{
            res.send(response)
        }
    )

}

const createStudentDoc = (req,res) =>{
    console.log(req.body)
    const {name,age,email} = req.body
    data = {
        message:"Inserted"
    }
    const studentDoc = new studentModel({
        name:name,
        age:age,
        email:email
    })
    studentDoc.save().then(
        (result) =>{
            res.send(data)
    })

}
const updateStudentDoc = (req,res) =>{
    const {id,name,age,email} = req.body
    const data = {
        message : "Updated"
    }
    studentModel.findByIdAndUpdate(id,{
        name:name,
        age:age,
        email:email
    })
    .then(
        (result) =>{
            res.send(data)
        }
    ) 
}

const deleteStudentDoc = (req,res) =>{
    const id = req.body.id
    const data = {
        message:"Deleted"
    }
    studentModel.findByIdAndDelete(id)
    .then(
        (result) =>{
            res.send(data)
        }
    )
}

module.exports = {deleteStudentDoc,updateStudentDoc,createStudentDoc,viewAllStudentDoc,viewSingleStudentDoc}