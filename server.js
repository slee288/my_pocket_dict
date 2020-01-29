const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
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

app.use("/api/v1/vocabs", vocabRoute);

app.get("/", (req, res) => {
    res.send("UI under development...");
});

app.listen(port, () => {
    console.log(`My Pocket Dictionary server listening on port ${port}!`);
});
