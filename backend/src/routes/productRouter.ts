import { Router } from "express"
import {
  getAllProducts,
  addNewProduct,
  deleteProduct,
  updateProduct,
  searchProductsByName
} from "../controllers/productController"

const productRouter = Router()

productRouter.get("/", getAllProducts)
productRouter.post("/", addNewProduct)
productRouter.delete("/:id", deleteProduct)
productRouter.put("/:id", updateProduct)

// Ruta para búsqueda por nombre
productRouter.get("/search", searchProductsByName)

export { productRouter }
