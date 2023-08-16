const { postNota, getNota } = require("../controllers/CRUD");

const router = require("express").Router();

router.post("/", postNota);
router.get("/", getNota);
module.exports = router;
