import express from "express";
import bodyParser from "body-parser";
import {adj,noun} from './resource.js'

const app = express();
const port = 3000;

//Step 3 - Make the styling show up.
//Hint 1: CSS files are static files!
//Hint 2: The header and footer are partials.
//Hint 3: Add the CSS link in header.ejs
app.use(express.static('public'));

//Step 4 - Add a dynamic year to the footer.
//Hint: Google to find out how to get the current year using JS.

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //Step 1 - Make the get route work and render the index.ejs file.
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  //Step 2 - Make the generate name functionality work
  //Hint: When the "Generate Name" button in index.ejs is clicked, it should hit up this route.
  //Then:
  //1. You should randomly pick an adjective from the const "adj" and a noun from const "noun",
  //scroll down to see the two arrays.
  //2. Send the index.ejs as a response and add the adjective and noun to the res.render
  //3. Test to make sure that the random words display in the h1 element in index.ejs
  const adjective = adj[Math.floor([Math.random() * (adj.length)])];
  const nouns = noun[Math.floor([Math.random() * (noun.length)])];
  res.render("index.ejs",{
    adj:adjective,
    noun:nouns
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

