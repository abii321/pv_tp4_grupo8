import { useState, useEffect, useMemo } from 'react';
import ProductForm from './assets/components/ProductForm.jsx';
import ProductList from './assets/components/ProductList.jsx';
import SearchBar from './assets/components/SearchBar.jsx';
import SearchById from './assets/components/SearchById.jsx';

function App() {
  const [productos, setProductos] = useState([]);
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [vistaActual, setVistaActual] = useState('general'); // 'general' | 'descripcion' | 'id'

  useEffect(() => {
    setProductosOriginales((prevOriginales) =>
      productos.length > prevOriginales.length ? productos : prevOriginales
    );
  }, [productos]);

  const productosFiltradosPorId = useMemo(() => {
    if (searchId === '') return [];
    return productos.filter((p) => p.id.toString() === searchId);
  }, [productos, searchId]);

  // Decidir qué lista mostrar
  const productosParaMostrar = useMemo(() => {
    if (vistaActual === 'id') return productosFiltradosPorId;
    return productos;
  }, [vistaActual, productos, productosFiltradosPorId]);

  return (
    <>
      <ProductForm productos={productos} setProductos={setProductos} />
      <SearchById productos={productos} />
      <SearchBar
        productosOriginales={productosOriginales}
        setProductos={setProductos}
        setSearchId={setSearchId}
        setVistaActual={setVistaActual}
      />
      <ProductList productos={productosParaMostrar} />
    </>
  );
}

export default App;
