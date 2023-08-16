const {
  getAlumnos,
  postAlumnos,
  editAlumnos,
  deleteAlumnos,
} = require("../controllers/CRUD");

const router = require("express").Router();

router.get("/", getAlumnos);
router.post("/", postAlumnos);
router.put("/", editAlumnos);
router.delete("/", deleteAlumnos);
module.exports = router;
