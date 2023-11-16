

const express = require('express')
const router=express.Router()
var admin = require("firebase-admin");
let db=admin.firestore();


router.post('/add',async (req,res)=>{
    console.log("req.bofdy -------------" , req.body);
    let docRef=db.collection('messages')
    // await docRef.add({
    //   email: req.body.user.email,
    //   password: req.body.user.password,
    // });
    // res.json({message:'done'});
  })
  
  module.exports=router;