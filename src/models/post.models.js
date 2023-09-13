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
	image_url: {
		type: DataTypes.STRING,
	},
	created_at: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.fn("NOW"),
	},
})

// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Post) // true

module.exports = Post
