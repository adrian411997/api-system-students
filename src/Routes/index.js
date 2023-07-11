const { Router } = require("express");

const User = require("./User");
const Materia = require("./Materia");
const Notas = require("./Notas");
const Alumnos = require("./Alumnos");

const router = Router();

router.use("/user", User);
router.use("/materia", Materia);
router.use("/notas", Notas);
router.use("/alumnos", Alumnos);

module.exports = router;
