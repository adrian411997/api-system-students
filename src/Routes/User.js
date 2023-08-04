const {
  postUsuario,
  getAllUsuario,
  updateUsuarioNombre,
  updateUsuarioPassword,
  deleteAlluser,
  login,
} = require("../controllers/CRUD");
const router = require("express").Router();

router.get("/", getAllUsuario);
router.post("/", postUsuario);
router.put("/nombre", updateUsuarioNombre);
router.put("/password", updateUsuarioPassword);
router.delete("/", deleteAlluser);
router.post("/login", login);
module.exports = router;
