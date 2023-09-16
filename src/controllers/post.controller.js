const Post = require("../models/post.models")

const postController = {
	// controlador para obtener todos los posts
	home: async (req, res) => {
		const posts = await Post.findAll()
		res.render("home", { posts: posts })
	},

	postView: async (req, res) => {
		const { id } = req.params
		const post = await Post.findOne({ where: { id } })
		if (!post) return res.status(400).render("error", { message: "No se encontró el post" })

		res.render("post-view", { post })
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
	formPosts: (req, res) => {
		res.render("create-post", { postToEdit: null })
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
	// obtener el post a editar
	getPost: async (req, res) => {
		const { id } = req.params

		// buscar el post a editar
		const postToEdit = await Post.findOne({ where: { id } })
		if (!postToEdit) return res.status(400).render("error", { message: "No se encontró el post" })
		res.render("create-post", { postToEdit })
	},

	// enviar el post editado a la BD
	editPost: async (req, res) => {
		const { id, title, content, imageUrl } = req.body

		try {
			await Post.update({ title, content, imageUrl }, { where: { id } })
			res.redirect("/")
		} catch (error) {
			res.status(400).send("Error al actualizar el post.")
		}
	},

	// Eliminar post
	deletePost: async (req, res) => {
		const { id } = req.body

		try {
			await Post.destroy({ where: { id } })
			res.redirect("/")
		} catch (error) {
			res.status(400).send("Error al eliminar el post.")
		}
	},
}

module.exports = { postController }
