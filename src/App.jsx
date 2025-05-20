import { useState, useEffect, useMemo, useCallback } from 'react';
import ProductForm from './assets/components/ProductForm.jsx';
import ProductList from './assets/components/ProductList.jsx';
import SearchBar from './assets/components/SearchBar.jsx';
import SearchById from './assets/components/SearchById.jsx';

function App() {
  const [productos, setProductos] = useState([]);
  const [productosOriginales, setProductosOriginales] = useState([]);
const [productosFiltrados, setProductosFiltrados] = useState([]);
const [productoEditado, setProductoEditado] = useState(null);


  useEffect(() => {
    setProductosOriginales((prevOriginales) => {
      return productos.length > prevOriginales.length ? productos : prevOriginales;
    });
  }, [productos]);

const eliminarProducto = useCallback((id) => {
    setProductos(productos.map(p => p.id === id ? { ...p, estado: false } : p));
}, [productos, setProductos]);

  return (
    <>
      <ProductForm productos={productos} setProductos={setProductos} productoEditado={productoEditado} setProductoEditado={setProductoEditado}
    />
        <SearchById productos={productos} setProductosFiltrados={setProductosFiltrados} />
      <SearchBar
        productosOriginales={productosOriginales}
        setProductos={setProductos}
      />
      <ProductList  productos={ (productosFiltrados.length > 0  ? productosFiltrados  : productos ).filter(p => p.estado !== false)
  } eliminarProducto={eliminarProducto}  SetProductos={setProductos} setProductoEditado={setProductoEditado}
/>  
    </>
  );
}

export default App;
