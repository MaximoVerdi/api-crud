# 🎯 OBJETIVO del Proyecto

Simular una tarea cotidiana dentro de un entorno de trabajo corporativo, aplicando una mejora sobre una aplicación previamente entregada. Esta mejora consiste en agregar una funcionalidad de búsqueda por nombre en la base de datos de productos, accesible desde el frontend y resuelta en el backend.

---

## 🚀 Tecnologías Utilizadas

### Backend

- Node.js
- Express
- TypeScript
- MongoDB (con Mongoose)
- Zod (validaciones)

### Frontend

- Vite + React
- Context API
- Fetch API

---

## ⚙️ Instrucciones para ejecutar el proyecto

### 📁 1. Clonar el repositorio

```bash
git clone https://github.com/MaximoVerdi/api-crud
cd api-crud
```

---

### 🖥️ 2. Ejecutar el **Backend**

```bash
cd backend
npm install

npm run dev
```

---

### 🌐 3. Ejecutar el **Frontend**

```bash
cd frontend
npm install
npm run dev
```

> Acceder a: [http://localhost:5173](http://localhost:5173)

---

## 🔍 Ejemplo de uso: Búsqueda de productos

Desde la página principal, al escribir en el campo de búsqueda (ej: "alfajor"), se listan todos los productos cuyo nombre coincida parcial o totalmente con el texto ingresado.

### Request al backend:

```http
GET /api/products/search?name=alfajor
```

### Respuesta:

```json
{
  "success": true,
  "message": "Se encontraron 2 productos",
  "data": [
    {
      "_id": "...",
      "name": "Alfajor artesanal",
      "price": 300,
      "category": "almacen"
    },
    {
      "_id": "...",
      "name": "Alfajor de chocolate",
      "price": 350,
      "category": "almacen"
    }
  ]
}
```

---

## 📄 Variables de Entorno (crear un archivo `.env` en el backend)

```env
PORT=1234
MONGO_URI=mongodb://localhost:27017/tienda-artesanal
JWT_SECRET=tu_clave_secreta
```

> Creá tu archivo `.env` en la raíz del backend y completalo según `.env.example`.

---

## 🧪 Scripts útiles

### Backend

```bash
npm run dev       # Ejecutar en desarrollo con ts-node-dev
npm run build     # Compilar TypeScript a JavaScript
npm start         # Ejecutar app compilada
```

---

## ✨ Autor

Desarrollado por [Maximo Verdi](https://github.com/MaximoVerdi).
