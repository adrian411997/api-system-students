const {
  postUsuario,
  getAllUsuario,
  updateUsuarioNombre,
  updateUsuarioPassword,
  deleteAlluser,
} = require("../controllers/CRUD");
const router = require("express").Router();

router.get("/", getAllUsuario);
router.post("/", postUsuario);
router.put("/nombre", updateUsuarioNombre);
router.put("/password", updateUsuarioPassword);
router.delete("/", deleteAlluser);
module.exports = router;
