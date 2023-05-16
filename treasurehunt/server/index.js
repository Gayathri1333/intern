const express=require("express");
const app=express();
const mysql=require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:'',
    database:'elitmus',
});
app.post('/register',(req,res) => {
    console.log(req.body);
    const email=req.body.email;
    const password=req.body.password;
    console.log(req.body);
    db.query('INSERT INTO register (email,password)VALUES (?,?)',
    [email,password],
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
    const email = req.body.email; 
    const password = req.body.password;


    db.query("SELECT * FROM register WHERE email = ? AND password = ?",
    [email,password],
    (err,result)=>{
        if(err){
            res.send({err: err});
        }        
        else if(result.length>0 ) {
            res.send(result);
        } else{
            res.send({message: "Wrong email/password combination"});

        }
    });
});

app.listen(3001,()=>{
    console.log("server is running on port 3001");
});