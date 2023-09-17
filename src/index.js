import "dotenv/config"
import express from "express"
import morgan from "morgan"
import { join } from "path"
const app = express()

import { sequelize, testConnection } from "./database/db.js"
const { PORT } = process.env

// routes
import { postRoutes } from "./routes/post.routes.js"

// Configura ESM para que pueda utilizar import y export
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurar EJS
app.set("view engine", "ejs")
console.log(import.meta.url)
// app.set("views", join(import.meta.url, "views"))
app.set("views", join(__dirname, "views"))
app.use(express.static("public"))

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan("dev"))

app.use(postRoutes)

app.listen(PORT, () => {
	console.log(`Servidor corriendo en puerto http://localhost:${PORT}`)
})

// connection test
testConnection()
