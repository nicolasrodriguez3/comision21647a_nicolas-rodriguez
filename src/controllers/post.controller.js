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
			res.redirect("/")
		} catch (error) {
			console.error(error)
			return res.status(400).send("Error cargando el post.")
		}
	},

	// vista para crear posts
	add: (req, res) => {
		res.render("create-post")
	},

	// controlador para eliminar un post
	deletePost: async (req, res) => {
		const { id } = req.params
		try {
			const userDeleted = await Post.destroy({ where: { id } })

			if (!userDeleted) throw new Error(`No existe el post con id ${id}`)

			return res.send({ message: "Usuario eliminado" })
		} catch (error) {
			console.error(error)
			return res.status(400).send({ message: "Error al eliminar el post." })
		}
	},

	// controlador para editar un post
	editPost: async (req, res) => {
		const { id } = req.params
		const { title, content, imageUrl } = req.body

		// buscar el post a editar
		const postToEdit = await Post.findOne({ where: { id } })
		if (!postToEdit) return res.status(400).send("No se encontró el post")

		try {
			const postEdited = await Post.update({ title, content, imageUrl }, { where: { id } })
			res.send(postEdited)
		} catch (error) {
			res.status(400).send("Error al actualizar el post.")
		}
	},
}

module.exports = { postController }
