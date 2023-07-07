const db = require("../db");

const postUsuario = async (req, res, next) => {
  try {
    let { nombre, email, password } = req.body;

    db.all(
      "SELECT * FROM usuario WHERE nombre = ? OR email = ?",
      [nombre, email],
      function (err, rows) {
        if (err) {
          throw err;
        }

        let find = rows;
        if (find.length > 0) {
          return res
            .status(400)
            .json({ result: "error", message: "Nombre u email ya registrado" });
        } else {
          db.run(
            "INSERT INTO usuario (nombre, email, password) VALUES (?, ?, ?)",
            [nombre, email, password],
            function (err) {
              if (err) {
                throw err;
              }

              res.status(200).json({
                result: "success",
                message: "Usuario creado satisfactoriamente",
              });
            }
          );
        }
      }
    );
  } catch (error) {
    next(error);
  }
};
module.exports = postUsuario;
