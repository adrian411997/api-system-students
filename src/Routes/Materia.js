const { postMateria, getMateria } = require("../controllers/CRUD");
const router = require("express").Router();

router.get("/", getMateria);
router.post("/", postMateria);
module.exports = router;
