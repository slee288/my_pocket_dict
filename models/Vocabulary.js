const mongoose = require("mongoose");

const VocabSchema = new mongoose.Schema({
    word: {
        type: String,
        required: [true, "You must add a vocabulary word"],
        unique: true,
        trim: true
    },
    tense: {
        type: String,
        required: [true, "You must declares all its tenses"]
    },
    definition: {
        type: String,
        required: [true, "You need a definition for a word"]
    },
    example_sentence: String,
    translation: String
});

module.exports = mongoose.model("Vocabulary", VocabSchema);
