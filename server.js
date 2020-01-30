const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

// import all routes in here
const vocabRoute = require("./routes/vocab");

// Load the environment variable
dotenv.config({path: "./config/config.env"});

// connect to the database
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")))

app.use("/api/v1/vocabs", vocabRoute);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
    console.log(`My Pocket Dictionary server listening on port ${port}!`);
});
