const postRoutes = require("express").Router()
const { postController } = require("../controllers/post.controller")

// Rutas para el CRUD
// Leer posts
postRoutes.get("/", postController.home)

postRoutes.get("/new-post", postController.add)

// Crear nuevo post
postRoutes.post("/add-post", postController.addPost)

module.exports = postRoutes
