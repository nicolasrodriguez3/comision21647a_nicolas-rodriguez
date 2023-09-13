const Post = require("../models/post.models")

const postController = {
	saludo: (req, res) => {
		res.render("home", { posts: [] })
	},
}

module.exports = { postController }
