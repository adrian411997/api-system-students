const { Router } = require("express");

const User = require("./User");
const router = Router();

router.use("/user", User);

module.exports = router;
