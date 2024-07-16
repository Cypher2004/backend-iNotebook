const mongoose = require('mongoose');

// Ensure the correct MongoDB URI is set
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://user:HTJzABsR7wNZmIWg@inotebook.ynmpcop.mongodb.net/dbmaster?retryWrites=true&w=majority&appName=iNotebook';

console.log('MongoDB URI:', mongoURI);

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Atlas successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
        process.exit(1); // Exit the process with a failure code
    }
}

module.exports = connectToMongo;
