import { Sequelize } from "sequelize"
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = process.env

export const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
	host: DB_HOST,
	port: DB_PORT,
	dialect: DB_DIALECT,
})

export const testConnection = async () => {
	try {
		await sequelize.authenticate()
		console.log("Connection has been established successfully.")
	} catch (error) {
		console.error("Unable to connect to the database:", error)
	}
}
