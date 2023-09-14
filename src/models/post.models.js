const { Sequelize, DataTypes } = require("sequelize")
const { sequelize } = require("../database/db")

const Post = sequelize.define("Post", {
	// Model attributes
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	content: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	imageUrl: {
		type: DataTypes.STRING,
	},
})

// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Post) // true

Post.sync()

module.exports = Post
