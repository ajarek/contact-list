const mongoose=require('mongoose')
const Contact = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   phone:{
        type:String,
        required:true
    },
    brithday:{
        type:String,
        required:true
    },    
})
module.exports = new mongoose.model('mycontact',Contact)