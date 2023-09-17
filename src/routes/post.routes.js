import { Router } from "express"
import { postController } from "../controllers/post.controller.js"

export const postRoutes = Router()

// Rutas para el CRUD
// Leer posts
postRoutes.get("/", postController.home)
postRoutes.get("/post/:id", postController.postView)

// formulario de creación de posts
postRoutes.get("/post", postController.formPosts)

// Crear nuevo post
postRoutes.post("/newPost", postController.addPost)

// Eliminar un post
postRoutes.post("/deletePost", postController.deletePost)

// Editar un post
postRoutes.get("/editPost/:id", postController.getPost)
postRoutes.post("/editPost", postController.editPost)

