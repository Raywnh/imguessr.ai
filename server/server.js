const express = require('express')

const app = express()

const openai = new OpenAIApi(configuration);
app.use(bodyParser.json());
app.use(cors());
  
app.listen(5000, () => {console.log("Server started on Port 5000")})

// REQUESTS
// GET: 
    