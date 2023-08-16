![Javascript](https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square)

Documentacion en progreso

# DOCENTE APP API

## Introducción

Esta documentación desarrollo y funcionamiento de una API REST para una aplicacion destinada a ayudar y facilitar la labor docente.

## Tabla de Contenidos

1. **Visión General**

   - Objetivo de la aplicación
   - Funcionalidades principales
   - Tecnologías utilizadas

2. **Instalación y Configuración**

   - Configuración de la base de datos

3. **Información de endpoints**
    - Usuarios
    - Alumnos
    - Notas 
    - Materia

## Vision general

### Objetivo principal

El objetivo principal es el almacenamiento de datos relacionados con los docentes y sus alumnos para ser utilizados por los propios usuarios. 

### Funciones principales

- **Registros de alumnos**: Para empezar con los registros de notas es necesario registrar a los alumnos. Solo se pide el nombre y el apellido.
- **Registros de materias**: Puedes agregar las materias que dictas.
- **Registro de notas**: Introduce las notas de tus alumnos rellenando un formulario para especificar al alumno, materia y trimestre.

Cabe recalcar que para empezar a usar la aplicacion es necesario crear un usuario para una mejorar la relacion de los datos introducidos con el mismo. Solo hace falta un nombre de usuario, contraseña y un email.

### Tecnologias utilizadas

Se ha utilizado NodeJs como principal herramienta para el backend junto con JWT y Express para manejar las solicitudes HTTPS.

## Instalacion y configuracion

### Instalacion de dependencias

Para esta parte es necesario:

- Clonar este repositorio
- Dirigirnos al directorio del proyecto
- Ejecutar:

  ```
  npm install
  ```
- Luego

    ```
    nodemon
    ```
  La aplicación se desplegará en su navegador web en la direccion **https/localhost:3001/**


## Información de endpoints 
### Usuarios
| Método | Endpoint | Descripción |
| ------ | -------- | ----------- |
| POST    | /api/alumnos/| Crear Usuario |
| POST   | /api/user/login | Login de usuario |
| PUT    | /api/user?id={id} |  Actualizar datos del usuario |

### Alumnos
| Método | Endpoint | Descripción |
| ------ | -------- | ----------- |
| POST    | /api/alumnos/| Crear alumnos |
| GET   | /api/alumnos?id={id} |Obtener datos segun id del usuario |
| PUT    | /api/alumnos?id={id} |  Actualizar datos del alumno |
| DELETE    | /api/alumnos?id={id} |Eliminar alumno |

### Materias
| Método | Endpoint | Descripción |
| ------ | -------- | ----------- |
| POST    | /api/materia/| Crear Materia |
| GET   | /api/materia |Obtener Materias|

### Notas
| Método | Endpoint | Descripción |
| ------ | -------- | ----------- |
| POST    | /api/notas| Crear Materia |
| GET   | /api/notas?id={id} |Obtener Materias segun id del usuario|
