const { postNota } = require("../controllers/CRUD");

const router = require("express").Router();

router.post("/", postNota);

module.exports = router;
