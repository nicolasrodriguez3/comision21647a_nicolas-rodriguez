const postRoutes = require("express").Router()
const { postController } = require("../controllers/post.controller")

postRoutes.get("/", postController.home)

postRoutes.get("/new-post", postController.add)

module.exports = postRoutes
