const Post = require("../models/post.models")

const postController = {
	// controlador para obtener todos los posts
	home: async (req, res) => {
		const posts = await Post.findAll()
		res.render("home", { posts: posts })
	},

	// controlador para crear un post
	addPost: async (req, res) => {
		const { title, content, imageUrl } = req.body

		try {
			const post = await Post.create({ title, content, imageUrl })
			res.send(post)
		} catch (err) {
			res.status(400).send("Error cargando el post")
		}
	},
	// vista para crear posts
	add: (req, res) => {
		res.render("create-post")
	},
}

module.exports = { postController }
