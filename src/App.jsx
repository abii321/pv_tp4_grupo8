import { useState, useMemo, useEffect} from 'react'
import ProductForm from './assets/components/ProductForm.jsx'
import ProductList from './assets/components/ProductList.jsx'
import SearchBar from './assets/components/SearchBar.jsx'
import SearchById from './assets/components/SearchById.jsx'

function App() {
  const [productos, setProductos] = useState([])
  const [searchId, setSearchId] = useState('');


 const productosFiltrados = useMemo(() => {
  if (searchId === '') return productos;
  return productos.filter((p) => p.id.toString() === searchId);
}, [productos, searchId]);

const eliminarProducto =(id)=>{
  setProductos(productos.filter(p => p.id !== id)); 
};

useEffect(() => {
  console.log('Resultado de búsqueda por ID:', productosFiltrados);
}, [productosFiltrados]);

  return (
    <>
      <ProductForm productos={productos} setProductos={setProductos} />
      <ProductList productos={productos} eliminarProducto={eliminarProducto} />
      <SearchById searchId={searchId} setSearchId={setSearchId} />
      <ProductList productos={productosFiltrados}  eliminarProducto={eliminarProducto} />
      <SearchBar productos={productos} />
        
    </>
  )
}

export default App;
