import { useState, useEffect, useMemo } from 'react';
import ProductForm from './assets/components/ProductForm.jsx';
import ProductList from './assets/components/ProductList.jsx';
import SearchBar from './assets/components/SearchBar.jsx';
import SearchById from './assets/components/SearchById.jsx';

function App() {
  const [productos, setProductos] = useState([]);
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    setProductosOriginales((prevOriginales) => {
      return productos.length > prevOriginales.length ? productos : prevOriginales;
    });
  }, [productos]);

  const productosFiltradosPorId = useMemo(() => {
    if (searchId === '') return productos;
    return productos.filter((p) => p.id.toString() === searchId);
  }, [productos, searchId]);

  return (
    <>
      <ProductForm productos={productos} setProductos={setProductos} />
      <SearchById searchId={searchId} setSearchId={setSearchId} />
      <SearchBar
        productosOriginales={productosOriginales}
        setProductos={setProductos}
      />
      <ProductList productos={searchId ? productosFiltradosPorId : productos} />
    </>
  );
}

export default App;
