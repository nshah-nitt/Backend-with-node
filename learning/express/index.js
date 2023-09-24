// Native Node Module to write in a file
import fs from 'fs';
fs.writeFile("message.txt","hello from node js",(err)=>{
    if(err) throw err;
})

// Native Node Module to read from a file
fs.readFile("./message.txt",'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})