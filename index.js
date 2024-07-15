const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
require('dotenv').config();
connectToMongo();
const app = express()

const port = process.env.PORT || 4000;
console.log("PORT :" + process.env.PORT );
const mongoURI = process.env.MONGODB_URI;


console.log('Mongo URI:', mongoURI);
app.use(cors())
app.use(express.json())
// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`)
})