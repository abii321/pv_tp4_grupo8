import { useState, useMemo, useEffect} from 'react'
import ProductForm from './assets/components/ProductForm.jsx'
import ProductList from './assets/components/ProductList.jsx'
import SearchBar from './assets/components/SearchBar.jsx'
import SearchById from './assets/components/SearchById.jsx'    

function App() {
  const [productos, setProductos] = useState([])
  const [searchId, setSearchId] = useState('');
  const [productoEditado, setProductoEditado] = useState(null); 


 const productosFiltrados = useMemo(() => {
  if (searchId === '') return productos;
  return productos.filter((p) => p.id.toString() === searchId);
}, [productos, searchId]);

useEffect(() => {
  console.log('Resultado de búsqueda por ID:', productosFiltrados);
}, [productosFiltrados]);

const modificarProducto = (productoModificado) => {
  setProductos((prevProductos) =>
    prevProductos.map((producto) =>
      producto.id === productoModificado.id ? productoModificado : producto
    )
  );
};

return (
  <>
    <ProductForm
      productos={productos}
      setProductos={setProductos}
      productoEditado={productoEditado}
      setProductoEditado={setProductoEditado}
      onModificar={modificarProducto}
    />
    <ProductList productos={productos} setProductoEditado={setProductoEditado} />
    <SearchById searchId={searchId} setSearchId={setSearchId} />
    <ProductList productos={productosFiltrados} />
    <SearchBar productos={productos} />
  </>
);
}

export default App;