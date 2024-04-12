require('./Config');
const cors = require('cors');
const adminModel = require('./Admin');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());
const Notes = require('./Notes');
const User = require('./User');


app.post('/login',async (req,res)=>{
    console.log("Called");
    if(req.body.username && req.body.password){
        let result = await adminModel.findOne(req.body).select('-password');
        if(result){
            res.send(result);
        }else{
            res.send({Status:"User Not Found"});
        }
    }else{
        res.send({Status:"Enter Valid Syntax"});
    }   
});

app.post('/addnotes-admin',async (req,res)=>{
    if (req.body.topic && req.body.subtopic && req.body.content 
        && req.body.addby){
            let result = new Notes(req.body);
            result = await result.save();
            if(result){
                res.send({Status:"Notes Inserted Successfully"});
            }
        }else{
            res.send({Status:"Invalid Syntax"});
        }
    
});

app.get('/readnotesadmin',async (req,res)=>{
    let result = await Notes.find();
    if (result.length>0){
        res.send(result);    
    }else{
        res.send({Status:'Notes Collection is Empty'});
    }
});

app.delete('/deletenotesadmin/:key',async (req,res)=>{
   let result = await Notes.deleteOne({_id:req.params.key});
   res.send(result);
});

app.put('/editnotesadmin/:key',async (req,res)=>{
    let result = await Notes.updateOne(
        {_id:req.params.key},
        { $set: req.body }
    );
    res.send(result);
});

app.get('/getnotesadmin/:key',async (req,res)=>{
    let result = await Notes.findOne({_id:req.params.key});
    res.send(result);
});

app.post('/signup',async (req,res)=>{
    try{
        if(req.body.name && req.body.email && req.body.contact && req.body.password
            && req.body.address){
                let result = new User(req.body);
                result = await result.save();
                res.send(result);
            }else{
                res.send({Status:"Syntax Error"});
            }
    }
    catch{
        res.send({Status:"User Already Registered"});
    }
});

app.post('/userlogin',async (req,res)=>{
    if(req.body.email && req.body.password){
        let result = await User.findOne(req.body).select('-password');
        if(result){
            res.send(result);
        }else{
            res.send({Status:"User Not Found"});
        }
    }else{res.send({Status:"Invalid Syntax"});}
});

app.get('/readnotesuser', async (req,res)=>{
    let result = await Notes.find();
    if(result){
        res.send(result);
    }else{
        res.send({Result : "No data found"});
    }
});

app.post('/mynotes/:key',async (req,res)=>{
    let result = await Notes.find({
        addby:req.params.key
    });
    if(result.length>0){
        res.send(result);
    }else{
        res.send({Status:"No Data Foune"});
    }
});

app.get('/search/:key',async (req,res)=>{
    let result = await Notes.find({
        "$or":[
            { topic:{$regex:req.params.key,$options: 'i'} }
        ]
    });
    res.send(result);
});

app.post('/getuser/:key',async (req,res)=>{
    try{
        let result = await User.findOne(
            {_id:req.params.key}
        ).select('-password');
        res.send(result);
    }catch{
        res.send({Status:"Id not Matched"});
    }
})

app.post('/updateuser/:key',async (req,res)=>{
    let result = await User.updateOne(
        {_id:req.params.key},
        {$set: req.body }
    );
    res.send(result);
});

app.get('/users',async (req,res)=>{
    let result = await User.find();
    res.send(result);
});

app.delete('/deleteuser/:key',async (req,res)=>{
    let result = await User.deleteOne({_id:req.params.key});
    res.send(result);
});

app.listen(4500);