const express= require("express");
const client=require('./db/conn.js');
const app =express();
const bodyParser= require('body-parser');
app.use(bodyParser.json());
const port =process.env.PORT || 3005; // process.env.PORT when we run online server than it will take care, and on localhost port will take 3000

app.get("/",(req,res)=>{
    res.send("hi from server");
})

app.get("/users",(req,res)=>{
    console.log(req.body);
    client.query('select * from userlogin',(err,resp)=>{
    if(!err){
        console.log(resp.rows);
        res.send(resp.rows);
    }else{
        console.log(err.message);
    }
})
client.end;
})

app.get('/users/:id', (req, res)=>{
    console.log(req.body);
    client.query(`Select * from userlogin where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    }),
    client.end;
})

app.post('/users', (req, res)=> {
    const user = req.body;
    console.log(user);
    let insertQuery = `insert into userlogin(username, password) 
                       values('${user.username}', '${user.password}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful');
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// app.post()

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
})


// client.end;