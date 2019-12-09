const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/bananarchy"
);

const itemSeed = [
    {
        
    }
]