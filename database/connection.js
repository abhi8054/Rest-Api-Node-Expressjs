const mongo = require("mongoose")

const databaseConnection = () =>{
    const url = process.env.DB_URL
    const option = {
        dbName:process.env.DB_NAME
    }
    mongo.connect(url,option)
    .then(
        (response) =>{
            console.log("Connection is successfull")
        }
    )
}

module.exports = databaseConnection