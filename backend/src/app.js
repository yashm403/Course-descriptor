const express = require('express');
// const cors = require('cors');
const app = express();
// app.use(cors());
// app.use(express.json());

require('./database/mongoose');

const Router = new express.Router();
const User = require('./routes/model');

Router.get('/',(req,res)=>{
    res.send("Hello World!");
})

Router.post('/Signup/create',async (req,res)=>{
    const user = new User(req.body)   // Data recieve from the request
    try{
        await user.save()
        
        res.status(200).send({msg:'Done'});
    } catch(e){
        res.status(400).send(e)
    }
})

Router.post('/Login',async(req,res)=>{
    try{
        const Email = req.body.Email;
        const Password = req.body.Password;
        const user  = await User.findByCredentials(Email,Password)
        res.status(200).send(user)
    }
    catch(e){
        res.status(200).send({msg:'NO'})
    }
})


app.listen(5000,()=>{
    console.log("Server is up")
})