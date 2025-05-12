import { useState, useMemo, useEffect} from 'react'
import ProductForm from './assets/components/ProductForm.jsx'
import ProductList from './assets/components/ProductList.jsx'
import SearchById from './assets/components/SearchById.jsx'    
function App() {
  const [productos, setProductos] = useState([])
  const [searchId, setSearchId] = useState('');


 const productosFiltrados = useMemo(() => {
  if (searchId === '') return productos;
  return productos.filter((p) => p.id.toString() === searchId);
}, [productos, searchId]);

useEffect(() => {
  console.log('Resultado de búsqueda por ID:', productosFiltrados);
}, [productosFiltrados]);

  return (
    <>
      <ProductForm productos={productos} setProductos={setProductos} />
      <SearchById searchId={searchId} setSearchId={setSearchId} />
      <ProductList productos={productosFiltrados} />
    </>
  )
}

export default App
