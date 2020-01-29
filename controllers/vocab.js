const Vocabulary = require("../models/Vocabulary");

// @desc   Get all vocabulary words
// @route  GET /api/v2/vocabs
// @access GET public
exports.getVocabs = async (req, res, next) => {
    try {
        const vocabs = await Vocabulary.find();

        return res.status(200).json({
            success: true,
            count: vocabs.length,
            data: vocabs
        });
    } catch(err) {
        console.error(err);

        // server error
        res.status(500).json({
            error: "Server error"
        });
    }
};

// @desc   Create a vocabulary word
// @route  POST /api/v1/vocabs
// @access public
exports.createVocab = async (req, res, next) => {
    try {
        const vocab = await Vocabulary.create(req.body);

        return res.status(200).json({
            success: true,
            data: vocab
        });
    } catch(err) {
        console.error(err);

        if(err.code === 11000) {
            return res.status(400).json({
                error: "This word already exists"
            });
        }

        // Server error
        res.status(500).json({
            error: "Server Error"
        });
    }
}
