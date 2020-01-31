const router = require("express").Router();
const {getVocabs, createVocab, findVocab, editVocab, deleteVocab} = require("../controllers/vocab");

router.route("/")
    .get(getVocabs)
    .post(createVocab);

router.route("/:id")
    .get(findVocab)
    .delete(deleteVocab);

router.route("/edit/:id")
    .post(editVocab);



module.exports = router;
