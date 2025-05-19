import { useState } from 'react';
import ProductForm from './assets/components/ProductForm.jsx';
import ProductList from './assets/components/ProductList.jsx';
import SearchBar from './assets/components/SearchBar.jsx';
import SearchById from './assets/components/SearchById.jsx';  

function App() {
  const [productos, setProductos] = useState([]); 
const [productosFiltrados, setProductosFiltrados] = useState([]);
  return (
    <>
      <ProductForm productos={productos} setProductos={setProductos} />
     <ProductList productos={productosFiltrados.length > 0 ? productosFiltrados : productos} />
     <SearchById productos={productos} setProductosFiltrados={setProductosFiltrados} />


     {/** <ProductList productos={productos} />  
      <SearchBar productos={productos} /> **/}
    </>
  );
}

export default App;
