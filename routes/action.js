const router = require('express').Router()
const Contact = require('../models/Contact')

router.get('/delete/:id',(req,res)=>{
    const{id}=req.params
    Contact.deleteOne({_id:id})
    .then(()=>{
        console.log('Deleted record successfully!')
        res.redirect("/")
    })
     .catch((err)=>console.log(err))
    
})
.get('/edit/:id',async(req,res)=>{
    const{id}=req.params
    const getData =await Contact.findOne({_id:id}) 
    res.render('editContact',{contact:getData})
})
.post('/edit/:id',(req,res)=>{
    const{id}=req.params
    const {name,email,phone,brithday}=req.body
    Contact.updateOne({_id:id},{name,email,phone,brithday})
    .then(()=>{
        console.log('successfuly! updated the contact!')
        res.redirect('/')
    })
    .catch(err=>console.log(err))
})
module.exports=router