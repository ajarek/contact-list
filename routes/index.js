const router = require('express').Router()
const Contact = require('../models/Contact')
const mysort = { name:1}

router.get('/',async(req,res)=>{
    const allRecord=await Contact.find({}).sort(mysort)
    res.render('displayContact',{contacts:allRecord}) 
})
module.exports=router