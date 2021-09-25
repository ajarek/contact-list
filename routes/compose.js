const router = require('express').Router()
const List = require('../models/Contact')

router.get('/compose',(req,res)=>{
    res.render('composeContact')
})
.post('/compose',(req,res)=>{
    const{name,email,phone,brithday}=req.body
    if(!name || !email || !phone || !brithday )
     return res.send('Plese enter the required credetnials!')
    
     const newList =new List({name,email,phone,brithday})
     newList.save()
     .then(()=>{
         console.log('Record Saved Successfully!')
         res.redirect('/')
     })
     .catch(err=>console.log('err'))
})
module.exports=router