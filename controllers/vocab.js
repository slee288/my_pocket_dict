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

// @desc   Find a vocabulary word
// @route  GET /api/v1/vocabs/:id
// @access public
exports.findVocab = async (req, res, next) => {
    try {
        const vocab = await Vocabulary.findById(req.params.id);

        if(vocab) {
            return res.status(200).json({
                success: true,
                data: vocab
            });
        } else {
            return res.status(400).json({
                error: "Could not find a vocabulary word with id " + req.params.id
            });
        }
    } catch(err) {
        console.error(err);

        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

// @desc   Edit a vocabulary word
// @route  POST /api/v1/vocabs/edit/:id
// @access public
exports.editVocab = async (req, res, next) => {
    try {
        const vocab = await Vocabulary.findByIdAndUpdate(req.params.id, req.body);

        if(vocab) {
            return res.status(200).json({
                success: true,
                data: vocab
            });
        } else {
            return res.status(400).json({
                error: "Could not find any data with id " + req.params.id
            })
        }

    } catch(err) {
        console.error(err);

        res.status(500).json({
            error: "Server Error"
        });
    }
};

// @desc   Delete a vocabulary word
// @route  DELETE /api/v1/vocabs/:id
// @access public
exports.deleteVocab = async (req, res, next) => {
    try {
        const deletedVocab = await Vocabulary.findByIdAndRemove(req.params.id);

        if(deletedVocab) {
            return res.status(200).json({
                success: true,
                data: deletedVocab
            });
        } else {
            return res.status(400).json({
                error: "No data with the id " + req.params.id + " was found"
            });
        }

    } catch(err) {
        console.error(err);

        res.status(500).json({
            error: "Server Error"
        });
    }
};
