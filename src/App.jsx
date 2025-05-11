import { useState } from 'react'
import ProductForm from './assets/components/ProductForm.jsx'
import ProductList from './assets/components/ProductList.jsx'

function App() {
  const [productos, setProductos] = useState([])

  return (
    <>
      <ProductForm productos={productos} setProductos={setProductos} />
      <ProductList productos={productos} />
    </>
  )
}

export default App
