const Post = require("../models/post.models")

const postController = {
	home: (req, res) => {
		res.render("home", { posts: [] })
	},

	add: (req, res) => {
		res.render("create-post")
	},
}

module.exports = { postController }
