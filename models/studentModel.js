const mongo = require("mongoose")

const studentSchema = new mongo.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true}
})

const studentModel = mongo.model("student",studentSchema)

module.exports = studentModel