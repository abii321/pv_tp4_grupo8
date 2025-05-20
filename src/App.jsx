import { useState, useEffect, useMemo } from 'react';
import ProductForm from './assets/components/ProductForm.jsx';
import ProductList from './assets/components/ProductList.jsx';
import SearchBar from './assets/components/SearchBar.jsx';
import SearchById from './assets/components/SearchById.jsx';

function App() {
  const [productos, setProductos] = useState([]);
  const [productosOriginales, setProductosOriginales] = useState([]);
const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    setProductosOriginales((prevOriginales) => {
      return productos.length > prevOriginales.length ? productos : prevOriginales;
    });
  }, [productos]);


  return (
    <>
      <ProductForm productos={productos} setProductos={setProductos} />
        <SearchById productos={productos} setProductosFiltrados={setProductosFiltrados} />
      <SearchBar
        productosOriginales={productosOriginales}
        setProductos={setProductos}
      />
      <ProductList productos={productosFiltrados.length > 0 ? productosFiltrados : productos} />

  
    </>
  );
}

export default App;
