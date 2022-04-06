//importing express
const express = require("express");

//importing mongoose
const mongoose = require("mongoose")

//importing cors
const cors = require("cors")

//setting up the default port
const port = process.env.PORT || 5000;

//binding express to a variable
const app = express();

//importing server schema
const ServerSchema = require('./ServerSchema');

//creating the initial connection to the database
mongoose.connect("mongodb://localhost:27017/zakPortfolio")

//init the database through the connection constructor, stored in a variable
const db = mongoose.connection

//binds error message to the connection variable to print if an error occurs
db.on('error', console.error.bind(console, 'connection error'))

//creating the entry model utilizing the entry schema and entries collection
const Entry = mongoose.model("entries", ServerSchema)

//middleware functions
app.use(express.static("./build"))
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.listen(port,()=>{
    console.log(`Listening on port: ${port}`)
})


//creating API route for the front end to access ALL the entries from the database
app.get("/allentries", async (req, res) => {
    //assigning the result of a find on our Model to a variable
    let allEntries = await Entry.find({})
    //sending the result as a json to the page
    res.json(allEntries)
  });
  

// redirecting to the home page 
// res.redirect("http://localhost:3000")