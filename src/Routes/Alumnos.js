const { getAlumnos, postAlumnos } = require("../controllers/CRUD");

const router = require("express").Router();

router.get("/", getAlumnos);
router.post("/", postAlumnos);

module.exports = router;
