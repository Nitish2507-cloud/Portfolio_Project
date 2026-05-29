const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

app.post("/contact", async (req, res) => {
  try {

    const newContact = new Contact(req.body);

    await newContact.save();

    res.status(201).json({
      message: "Message Saved Successfully",
    });

  } catch (error) {

    res.status(500).json({
      error: "Something went wrong",
    });

  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});