import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { getProducts, deleteProduct, searchProductsByName } from "../services/products"
import { useAuth } from "../context/AuthContext"

const Home = () => {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


  const { user } = useAuth()

  const fetchProducts = async (search = "") => {
    if (search.trim() === "") {
      const response = await getProducts()
      const responseToJson = await response.json()
    
      if (response.ok) {
        setProducts(responseToJson.data)
      }
    } else {
      const data = await searchProductsByName(search)
      setProducts(data)
    }
  }

  const handleClick = async (id) => {
    if (confirm("Esta seguro que quieres borrar el producto?")) {
      const response = await deleteProduct(id)
      if (!response.ok) {
        alert("Error al borrar producto.")
      } else {
        alert("Producto borrado con éxito.")
        fetchProducts()
      }
    }
  }

  useEffect(() => {
      fetchProducts()
    }, [])

    useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchProducts(searchTerm)
    }, 300) // debounce 300ms para evitar muchas llamadas

    return () => clearTimeout(delayDebounce)
  }, [searchTerm])


  return (
    <Layout>
      <input
        type="text"
        placeholder="Buscar productos por nombre"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value)
        }}
      />
      <h1>Bienvenido a nuestra tienda de productos artesanales</h1>
      <p>Descubrí nuestra selección exclusiva de productos únicos hechos a mano. Calidad y diseño en cada detalle.</p>
      <section>
        {
          products.map(product => (
            <div key={product._id}>
              <p><b>Nombre:</b> {product.name}</p>
              <p><b>Precio:</b> {product.price}</p>
              <p><b>Categoria:</b> {product.category}</p>
              {
                user && <div className="cont-button-product">
                  <button onClick={() => handleClick(product._id)}>Borrar</button>
                </div>
              }
            </div>
          ))
        }
      </section>
    </Layout>
  )
}

export { Home }