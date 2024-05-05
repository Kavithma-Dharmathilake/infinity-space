require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const cors = require('cors');

const app = express();

// Enable CORS and specify allowed origin(s)
app.use(cors({
    origin: 'https://main--infinity-space-nasa.netlify.app/' // Replace with your frontend's URL
}));

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.get('/apod', async (req, res) => {
  try {
      // Fetch data from NASA APOD API
      const response = await axios.get(NASA_APOD_API_URL, {
          params: {
              api_key: NASA_API_KEY
          }
      });
      // Send the data to the frontend
      res.json(response.data);
  } catch (error) {
      console.error('Error fetching APOD:', error);
      res.status(500).json({ error: 'Error fetching APOD' });
  }
});

// routes
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })