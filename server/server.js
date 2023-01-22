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

//var words = ["Turtle", "Garfield", "alligator", "headphones", "wedding dress", "violin", "newspaper", "raincoat", "chameleon","Cardboard", "Oar", "Drip", "Shampoo", "Time Machine", "Yardstick", "Think", "Lace", "Darts", "Avocado", "Bleach","Curtain", "Extension Cord", "Dent", "Birthday", "Lap", "Sandbox", "Bruise", "Fog", "Sponge", "Wig", "Pilot", "Mascot", "Fireman", "Zoo", "Sushi", "Fizz", "Ceiling", "Post Office", "Season", "Internet", "Chess", "Puppet", "Chime", "Koala", "Dentist", "Ping Pong", "Bonnet", "Sheets", "Sunburn", "Houseboat", "Sleep", "Kneel", "Crust", "Speakers", "Cheerleader", "Dust", "Salmon", "Cabin", "Handle","Swamp", "Cruise", "Pharmacist","Dream","Raft","Plank","Cliff", "Sweater", "Safe","Picnic", "Shrink", "Ray", "Leak","Deep", "Tiptoe","Hurdle", "Knight","Cloak","Bedbug", "Hot Tub", "Firefighter", "Charger", "Nightmare","Coach","Sneeze","Goblin","Chef","Applause","Golden Retriever","Joke","Comedian","Cupcake","Baker","Facebook","Convertible","Giant","Garden","Diving","Hopscotch","Stingray","Song","Trip","Backbone","Bomb","Treasure","Garbage","Park","Pirate","Ski","Whistle","State","Baseball","Coal","Queen","Photograph","Computer","Hockey","Hot Dog","Salt and Pepper", "iPad", "Frog", "Lawnmower", "Mattress", "Pinwheel", "Cake", "Circus", "Battery", "Mailman", "Cowboy","Password","Bicycle","Skate","Electricity","Thief","Teapot","Deep","Spring","Nature","Shallow","Outside","America","Bow tie","Wax","Light Bulb","Music","Popsicle","Brain","Birthday Cake", "Knee", "Pineapple", "Tusk", "Sprinkler", "Money", "Pool", "Lighthouse", "Doormat", "Face", "Flute", "Rug", "Snowball", "Purse", "Owl", "Gate", "Suitcase", "Stomach", "Doghouse", "Pajamas", "Bathroom", "Scale", "Peach", "Newspaper", "Watering Can", "Hook", "School", "French Fries", "Beehive", "Artist", "Flagpole", "Camera","Hair Dryer","Mushroom","TV","Quilt","Chalk","angle","ant","apple","arch","arm","army","baby","bag","ball","band","basin","basket","bath","bed","bee","bell","berry","bird","blade","board","boat","bone","book","boot","bottle","box","boy","brain","brake","branch","brick","bridge","brush","bucket","bulb","button","cake","camera","card","carriage","cart","cat","chain","cheese","chess","chin","church","circle","clock","cloud","coat","collar","comb","cord","cow","cup","curtain","cushion","dog","door","drain","drawer","dress","drop","ear","egg","engine","eye","face","farm","feather","finger","fish","flag","floor","fly","foot","fork","fowl","frame","garden","girl","glove","goat","gun","hair","hammer","hand","hat","head","heart","hook","horn","horse","hospital","house","island","jewel","kettle","key","knee","knife","knot","leaf","leg","line","lip","lock","map","match","monkey","moon","mouth","muscle","nail","neck","needle","nerve","net","nose","nut","office","orange","oven","parcel","pen","pencil","picture","pig","pin","pipe","plane","plate","plough","pocket","pot","potato","prison","pump","rail","rat","receipt","ring","rod","roof","root","sail","school","scissors","screw","seed","sheep","shelf","ship","shirt","shoe","skin","skirt","snake","sock","spade","sponge","spoon","spring","square","stamp","star","station","stem","stick","stocking","stomach","store","street","sun","table","tail","thread","throat","thumb","ticket","toe","tongue","tooth","town","train","tray","tree","trousers","umbrella","wall","watch","wheel","whip","whistle","window","wing","wire","worm"]

var words = ["Plane", "House", "Horse", "Dog", "Cat"]

var adjs = ["good", "new", "first", "last", "long", "great", "little", "old", "big", "small", "green", "red", "happy","large"];
//var words = ["Plane", "House", "Horse", "Dog", "Cat"]
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
app.get("/image/:mode", async (req, res) => {
  var random = Math.floor(Math.random() * words.length)
  var randomAdj = Math.floor(Math.random() * adjs.length)
  var randomWord = adjs[randomAdj] + ' ' + words[random]

  // Get the prompt from the request
  // Generate image from prompt
  const response = await openai.createImage({
    prompt: randomWord,
    n: 1,
    size: "256x256",
  });
  
  // Send back image url
  res.send({link: response.data.data[0].url,
            word: randomWord}
  );
  
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