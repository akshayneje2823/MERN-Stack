const express = require("express");
const signUpTemplete = require('../models/signupModels')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello Brother")
})

router.post('/singnup',(req,res)=>{
    const [fullName,username,email,password] = req.body;

    // Promise
    const signedUser = new signUpTemplete({
       fullName : fullName,
       username : username,
       email: email,
       password : password
    });
    signedUser.save()
    .then(data => res.json(data))
    .catch(error => res.json(error))

    res.send('Are we done?')
});

module.exports = router