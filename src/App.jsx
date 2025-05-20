import { useState, useEffect, useMemo, useCallback } from 'react';
import ProductForm from './assets/components/ProductForm.jsx';
import ProductList from './assets/components/ProductList.jsx';
import SearchBar from './assets/components/SearchBar.jsx';
import SearchById from './assets/components/SearchById.jsx';

function App() {
  const [productos, setProductos] = useState([]);
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [vistaActual, setVistaActual] = useState('general');
const [productosFiltrados, setProductosFiltrados] = useState([]);
const [productoEditado, setProductoEditado] = useState(null);

  useEffect(() => {
    setProductosOriginales((prevOriginales) =>
      productos.length > prevOriginales.length ? productos : prevOriginales
    );
  }, [productos]);

 const productosFiltradosPorId = useMemo(() => {
   if (searchId === '') return [];
   return productos.filter((p) => p.id.toString() === searchId);
 }, [productos, searchId]);
  
const eliminarProducto = useCallback((id) => {
    setProductos(productos.map(p => p.id === id ? { ...p, estado: false } : p));
}, [productos, setProductos]);

  const productosParaMostrar = useMemo(() => {
    if (vistaActual === 'id') return productosFiltradosPorId;
    return productos;
  }, [vistaActual, productos, productosFiltradosPorId]);

  return (
    <>
      <SearchBar productosOriginales={productos} setSearchId={setSearchId} />
      <ProductForm productos={productos} setProductos={setProductos} productoEditado={productoEditado} setProductoEditado={setProductoEditado}
    />
        <SearchById productos={productos} setProductosFiltrados={setProductosFiltrados} />

      <ProductList  productos={ (productosFiltrados.length > 0  ? productosFiltrados  : productos ).filter(p => p.estado !== false)
  } eliminarProducto={eliminarProducto}  SetProductos={setProductos} setProductoEditado={setProductoEditado}
/>  
    </>
  );
}

export default App;
