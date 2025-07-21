import { connect } from "mongoose"
process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectDb = async () => {
  try {
    await connect(URI_DB)
    console.log("✅ Conectado a Mongo DB")
  } catch (error) {
console.error("🛑 Error al conectarse a Mongo DB:", error)
  }
}

export { connectDb }