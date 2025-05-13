import { useState } from 'react';
import ProductForm from './assets/components/ProductForm.jsx';
import ProductList from './assets/components/ProductList.jsx';
import SearchBar from './assets/components/SearchBar.jsx';
import SearchById from './assets/components/SearchById.jsx';

function App() {
  const [productos, setProductos] = useState([]); 

  return (
    <>
      <ProductForm productos={productos} setProductos={setProductos} />
      <ProductList productos={productos} />
      <SearchById productos={productos} /> 
      <ProductList productos={productos} />  
      <SearchBar productos={productos} />
    </>
  );
}

export default App;
