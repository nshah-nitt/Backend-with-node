import bodyParser from "body-parser";
import express from "express"
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({"extended":true}));

app.listen(port,()=>{
  console.log(`Server is listening on port ${port}`);
})
app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
  const nameLength = req.body["fName"].length+req.body["lName"].length;
  res.render("index.ejs",{
    numberOfLetters : nameLength
  });
});

