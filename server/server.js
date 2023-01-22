const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const app = express();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

// Set up the server
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database"))

app.use(express.json())

const Word = require("./models/words")

// Set up the DALL-E endpoint
app.post("/image", async (req, res) => {

    const prompt = Word.aggregate([{$sample:{size: 3}}])

    console.log(prompt)
    
  // Get the prompt from the request
  // Generate image from prompt
  const response = await openai.createImage({
    prompt: prompt[0].word,
    n: 1,
    size: "1024x1024",
  });

  // Send back image url
  try {
    res.status(201).json(response.data.data[0].url) // 201: successful creation
  } catch (error) {
    res.status(400).json({message: error.message}) // 400: clientside error
  }
});

app.post("/words", async (req, res) => {
    const words = Word.create({
        word: req.body.word,
        isAdjective: req.body.isAdjective
    })
    try {
        const newWord = await (await words).save()
        res.status(201).json(newWord) // 201: successful creation
    } catch (error) {
        res.status(400).json({message: error.message}) // 400: clientside error
    }
})


// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});