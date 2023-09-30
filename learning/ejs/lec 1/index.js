import bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({"extended":true}))
app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("abc.ejs", data);
});
app.post("/submit",(req,res)=>{
  res.render("abc.ejs",{
    name:req.body["Name"]
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
