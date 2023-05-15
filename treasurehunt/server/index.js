const express=require("express");
const app=express();
const mysql=require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:'',
    database:'elitmus',
});
app.post('/register',(req,res) => {
    console.log(req.body);
    const username=req.body.username;
    const password=req.body.password;
    console.log(req.body);
    db.query('INSERT INTO register (username,password)VALUES (?,?)',
    [username,password],
    (err,result) =>{
        if(err){
            console.log(err);
        } else{
            res.send("Values inserted");
        }

    });
})
app.get('/getData',(req,res)=>{
    db.query("SELECT * from register",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get("/getClues",(req,res)=>{
    db.query("SELECT * from clues",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post('/validate',(req,res)=>{
    const username = req.body.username; 
    const password = req.body.password;


    db.query("SELECT * FROM register WHERE username = ? AND password = ?",
    [username,password],
    (err,result)=>{
        if(err){
            res.send({err: err});
        }        
        else if(result.length>0 ) {
            res.send(result);
        } else{
            res.send({message: "Wrong username/password combination"});

        }
    });
});

app.listen(3001,()=>{
    console.log("server is running on port 3001");
});