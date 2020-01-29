const router = require("express").Router();
const {getVocabs, createVocab} = require("../controllers/vocab");

router.route("/")
    .get(getVocabs)
    .post(createVocab);

module.exports = router;
