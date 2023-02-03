const {Client} =require('pg');

const client =new Client({
    host:'localhost',
    user:'postgres',
    port:5432,
    password:'1234',
    database:'instaclonedata'
})

client.connect().then(()=>{console.log('connection is success')}).catch((err)=>{console.log("error in conection with database with following error:" + err)});

module.exports=client;