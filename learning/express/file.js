// importing required modules
import {dirname} from "path";
import express from "express";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// configuring path to the root folder
const __dirname = dirname(fileURLToPath(import.meta.url)); 
const app = express(); 
const port = 3000;
var bandname = "";

// middleware function to generate band name
function bandNameGenerator(req,res,next){
    console.log(req.method);
    bandname = req.body["streets"]+" "+req.body["petnames"];
    next();
}
// calling middlewares before route methods so that they can respond to each reqeuest
app.use(bodyParser.urlencoded({extended :true}));
app.use(bandNameGenerator);

// configured port using express
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
// route methods

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/submit",(req,res,next)=>{
    res.send(`<h1>your bandname is ${bandname}</h1>`);
})


