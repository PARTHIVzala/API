const mongoose = require("mongoose");
const dbconnect = () => {
    mongoose.connect("mongodb+srv://parthiv_1004:Parthiv123@cluster0.zbxdmbb.mongodb.net/API")
        .then(() => {
            console.log("db Connect");
        })
        .catch((error) => {
            console.log(error);
        })
}
module.exports =dbconnect