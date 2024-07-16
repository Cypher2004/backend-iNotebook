const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
require('dotenv').config();
connectToMongo();
const app = express()

const port = process.env.PORT || 4000;
console.log("PORT :" + process.env.PORT );


const corsOptions = {
  origin: '*', // Replace with your frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions))
app.use(express.json())
// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`)
})