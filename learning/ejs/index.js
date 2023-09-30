import express from "express";

const app = express();
const port = 3000;
var fruit = ["banana","orange","kiwi"];

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    let type = "a weekday";
    let adv = "it's time to work hard"
    if(day == 0 || day == 6){
        type = "the weekend";
        adv = "it's time to have some fun !";
    }
    res.render("index.ejs", {
        dayType: type, 
        advice: adv 
    });
});
app.get("/hello",(req,res)=>{
    res.render("file1.ejs",{
        fruits:fruit
    })
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})