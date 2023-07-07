const db = require("../db");

//USUARIOS
const postUsuario = async (req, res, next) => {
  try {
    const { nombre, email, password } = req.body;
    console.log(nombre, email, password);
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
const getAllUsuario = async (req, res, next) => {
  db.all("SELECT * FROM usuario", [], function (err, rows) {
    if (err) {
      throw err;
    }

    let users = rows;
    console.log(users);
    return res.status(200).json({ users });
  });
};
const updateUsuarioNombre = async (req, res, next) => {
  let { id } = req.query;
  let { nombre } = req.body;
  console.log(id, nombre);
  try {
    db.run(
      "UPDATE usuario SET nombre = ? WHERE id = ?",
      [nombre, id],
      function (err) {
        if (err) {
          throw err;
        } else {
          res.status(200).json({ message: "Nombre cambiado con éxito" });
        }
      }
    );
  } catch (error) {
    next(error);
  }
};
const updateUsuarioPassword = async (req, res, next) => {
  let { id } = req.query;
  let { password } = req.body;
  db.run(
    "UPDATE usuario SET password = ? WHERE id = ?",
    [password, id],
    function (err) {
      if (err) {
        throw err;
      } else {
        res.status(400).json({ message: "Contraseña cambiado con éxito" });
      }
    }
  );
};
const deleteAlluser = async (req, res, next) => {
  db.run("DELETE FROM usuario", [], function (err) {
    if (err) throw err;
  });
  res.json({ message: "Eliminados todos papu" });
};
module.exports = {
  postUsuario,
  getAllUsuario,
  updateUsuarioNombre,
  updateUsuarioPassword,
  deleteAlluser,
};
