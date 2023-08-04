const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("datos.db");

// Crear una tabla de ejemplo
db.run(
  `CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, usuario_nombre TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL)`
);

db.run(
  `CREATE TABLE IF NOT EXISTS alumnos (id INTEGER PRIMARY KEY AUTOINCREMENT, alumno_nombre TEXT NOT NULL, apellido TEXT NOT NULL, usuario_id INTEGER, FOREIGN KEY (usuario_id) REFERENCES usuario(id))`
);

db.run(
  `CREATE TABLE IF NOT EXISTS materias (id INTEGER PRIMARY KEY AUTOINCREMENT, materia_nombre TEXT NOT NULL)`
);

db.run(
  `CREATE TABLE IF NOT EXISTS notas (id INTEGER PRIMARY KEY AUTOINCREMENT, nota FLOAT NOT NULL, fecha DATE NOT NULL,trimestre INT NOT NULL, alumno_id INTEGER, materia_id INTEGER,  FOREIGN KEY (alumno_id) REFERENCES alumnos(id), FOREIGN KEY (materia_id) REFERENCES materias(id))`
);

module.exports = db;
