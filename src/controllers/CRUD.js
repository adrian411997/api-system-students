const db = require("../db");
const jwt = require("jsonwebtoken");
//USUARIOS
const login = async (req, res, next) => {
  try {
    let { nombre, password } = req.body;

    db.all(
      "SELECT * FROM usuario WHERE usuario_nombre = ? AND password = ?",
      [nombre, password],
      function (err, rows) {
        if (err) {
          throw err;
        }
        let find = rows[0];
        console.log(find);
        if (find) {
          const token = jwt.sign(find, process.env.JWT_TOKEN_SECRET);

          return res.status(200).json({
            result: "success",
            message: "Inicio de sesion con éxito",
            token,
            user: find,
          });
        } else {
          return res
            .status(400)
            .json({ result: "error", message: "Credenciales inválidas" });
        }
      }
    );
  } catch (error) {
    next(error);
  }
};
const postUsuario = async (req, res, next) => {
  try {
    const { nombre, email, password } = req.body;
    if (!nombre || !email || !password) {
      return res.status(400).json({
        message: "Elementos no introducidos correctamente",
        result: "error",
      });
    }
    db.all(
      "SELECT * FROM usuario WHERE usuario_nombre = ? OR email = ?",
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
            "INSERT INTO usuario (usuario_nombre, email, password) VALUES (?, ?, ?)",
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
  try {
    db.run(
      "UPDATE usuario SET nombre = ? WHERE id = ?",
      [nombre, id],
      function (err) {
        if (err) {
          throw err;
        } else {
          res
            .status(200)
            .json({ result: "success", message: "Nombre cambiado con éxito" });
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
        res.status(400).json({
          result: "success",
          message: "Contraseña cambiado con éxito",
        });
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

// MATERIAS

const getMateria = (req, res, next) => {
  db.all("SELECT * FROM materias", [], function (err, rows) {
    if (err) {
      throw err;
    }
    let finds = rows;
    res.status(200).json({ finds });
  });
};

const postMateria = (req, res, next) => {
  const { nombre } = req.body;
  try {
    db.all(
      "SELECT * FROM materias WHERE materia_nombre = ?",
      [nombre],
      function (err, rows) {
        if (err) {
          throw err;
        }
        let find = rows;
        if (find.length > 0) {
          return res
            .status(400)
            .json({ result: "error", message: "Materia ya registrada" });
        } else {
          db.run(
            "INSERT INTO materias (materia_nombre) VALUES (?)",
            [nombre],
            function (err) {
              if (err) {
                throw err;
              }
              res.status(200).json({
                result: "success",
                message: "Materia creada con exito",
              });
            }
          );
        }
      }
    );
  } catch (err) {
    next(err);
  }
};

//ALUMNOS
const postAlumnos = (req, res, next) => {
  const { nombre, apellido, user_id } = req.body;
  db.all(
    "INSERT INTO alumnos (alumno_nombre,apellido,usuario_id) VALUES (?,?,?)",
    [nombre, apellido, user_id],
    function (err) {
      if (err) {
        throw err;
      }
      return res
        .status(200)
        .json({ result: "success", message: "Estudiante creado con éxito" });
    }
  );
};
const getAlumnos = (req, res, next) => {
  const { id } = req.query;
  console.log(req.body);
  db.all(
    "SELECT * FROM alumnos WHERE usuario_id = ?",
    [id],
    function (err, rows) {
      if (err) {
        throw err;
      }
      let finds = rows;
      res.status(200).json({ finds });
    }
  );
};

// NOTA

const postNota = (req, res, next) => {
  const { idAlumno, idMateria, nota, trim } = req.body;
  const fechaDesdeString = new Date("2023-07-10");
  console.log(req.body);
  db.all(
    "INSERT INTO notas (nota,fecha,alumno_id,materia_id,trimestre) VALUES (?,?,?,?,?)",
    [nota, fechaDesdeString, idAlumno, idMateria, trim],
    function (err) {
      if (err) {
        throw err;
      }
      return res
        .status(200)
        .json({ result: "success", message: "Nota subida con exito" });
    }
  );
};

module.exports = {
  postUsuario,
  getAllUsuario,
  updateUsuarioNombre,
  updateUsuarioPassword,
  deleteAlluser,
  postMateria,
  getMateria,
  postNota,
  getAlumnos,
  postAlumnos,
  login,
};
