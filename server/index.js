const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();
app.use(cors())
app.use(express.json());

app.post('/cribewise',async (req,res)=>{

    const {uname,password,url} = req.body;
    console.log(uname,password,url)
    

    var auth = "Basic " + new Buffer.from(uname + ":" + password).toString("base64");
    var authOptions = {
        url: url,
        headers: {
          'Authorization': auth,
        },
        json: true
      };


      request.get(authOptions,function(error, response, body) {
          console.log(body);
        if (!error && response.statusCode === 200) {
         
          res.status(200).send({data:body.value});
        }
        else{
            console.log(error);
            res.status(200).send({error:true});
        }
      })
}).post('/login/cribewise',async (req,res)=>{

    const {uname,password,url} = req.body;
    console.log(uname,password,url);
    

    var auth = "Basic " + new Buffer.from(uname + ":" + password).toString("base64");
    var authOptions = {
        url: url,
        headers: {
          'Authorization': auth,
        },
        json: true
      };


      request.get(authOptions,function(error, response, body) {
        if (!error && response.statusCode === 200) {
         
          res.status(200).send({user:{uname,password,url:url}});
        }
        else{
            res.status(200).send({error:true});
        }
      })
})
.post('/login/navvis',async (req,res)=>{
    

    const {uname,password,url} = req.body;
    console.log(uname,password,url);
 
    var authOptions = {
        url: url,
        body:{
            username:uname,
            password:password
        },
        headers: {
          'Content-Type': 'application/json',
        },
        json: true
      };


      request.post(authOptions,function(error, response, body) {
          
        if (!error && response.statusCode === 200) {
         
          res.status(200).send({user:{uname,password,url:url}});
        }
        else{
            res.status(200).send({error:true});
        }
      })
})


const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})