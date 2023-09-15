const postRoutes = require("express").Router()
const { postController } = require("../controllers/post.controller")

// Rutas para el CRUD
// Leer posts
postRoutes.get("/", postController.home)

postRoutes.get("/new-post", postController.add)

// Crear nuevo post
postRoutes.post("/add-post", postController.addPost)

// Eliminar un post
postRoutes.delete("/post/:id", postController.deletePost)

// Editar un post
postRoutes.put("/post/:id", postController.editPost)

module.exports = postRoutes
