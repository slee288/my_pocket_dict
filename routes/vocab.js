const router = require("express").Router();
const {getVocabs, createVocab, editVocab, deleteVocab} = require("../controllers/vocab");

router.route("/")
    .get(getVocabs)
    .post(createVocab);

router.route("/:id")
    .delete(deleteVocab);

router.route("/edit/:id")
    .post(editVocab);



module.exports = router;
