//importing mongoose
const mongoose = require("mongoose")

//bringing in express
const express = require("express");

//bringing in cors to resolve any CORS errors in-browser
const cors = require("cors")

//importing server schema
const ServerSchema = require('./ServerSchema');

//creating initial connection to the database 
mongoose.connect("mongodb://localhost:27017/zakPortfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//init the database through the connection constructor, stored in a variable
const db = mongoose.connection

//default port
const port = process.env.PORT || 5000;

const router = express.Router();

//binding express to a variable
const app = express();

//nodemailer 
const nodemailer = require("nodemailer");
//env file
require("dotenv").config();

//binds error message to the connection variable to print if an error occurs
db.on('error', console.error.bind(console, 'connection error'))

//middleware functions
app.use(express.static("./build"))
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json());
app.use("/", router);

//creating the entry model utilizing the entry schema and entries collection
const Entry = mongoose.model("entries", ServerSchema)

app.listen(port,()=>{
    console.log(`Listening on port: ${port}`)
})

//Setting up nodemailer with gmail
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:process.env.USER,
    pass: process.env.PASS,
  },

});

contactEmail.verify((error) => {
  if (error){
    console.log(error);
  } else {
    console.log("Ready to send")
  }
});

// setting up the router to send an email
router.post("/contact", (req,res) => {
const name = req.body.name;
const email = req.body.email;
const subject = req.body.subject;
const message = req.body.message;

const mail = {
  from: `Contact Form: ${email}`,
  to: "portfoliotest001@gmail.com",
  subject: subject,
  html: `<p>Name: ${name}</p>
  <p>Email: ${email}</p>
  <p>Message: ${message}</p>`
};

contactEmail.sendMail(mail, (error) => {
  if (error) {
    res.json({status: "ERROR"});
  } else {
    res.json({status: "Message Sent"})
  }
});

});

  //CREATE functionality for inserting a new entry into our collection
app.post("/create", async (req, res) => {
  //assigning the creation of a new entry to a variable
const newEntry = new Entry({
  date: req.body.date,
  email: req.body.email,
  subject: req.body.subject,
  message: req.body.message,
})

  //saving the new entry to the Model
  await newEntry.save()

  //redirecting to the home page - Does not use react router
// res.redirect("/")
});
