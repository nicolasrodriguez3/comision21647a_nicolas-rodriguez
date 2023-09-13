const postRoutes = require("express").Router()
const { postController } = require("../controllers/post.controller")

postRoutes.get("/", postController.home)

postRoutes.get("/add", postController.home)

module.exports = postRoutes
