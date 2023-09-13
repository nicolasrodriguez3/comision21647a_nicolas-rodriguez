require("dotenv").config()
const express = require("express")
const path = require("path")
const app = express()

const { sequelize, testConnection } = require("./database/db.js")
const { PORT } = process.env

// routes
const postRoutes = require("./routes/post.routes")

// Configurar EJS
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static("public"))

// Configurar middleware para procesar datos json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(postRoutes)

app.listen(PORT, () => {
	console.log(`Servidor corriendo en puerto https://localhost:${PORT}`)
})

// connection test
testConnection()
