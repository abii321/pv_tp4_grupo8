import { useState, useMemo } from 'react';

function SearchBar({ productosOriginales, setProductos, setSearchId, setVistaActual }) {
  const [termino, setTermino] = useState('');
  const [modoBuscar, setModoBuscar] = useState(true); // true = Buscar, false = Limpiar

  const productosFiltrados = useMemo(() => {
    return productosOriginales.filter(p =>
      (p.descripcion?.toLowerCase() || '').includes(termino.toLowerCase())
    );
  }, [productosOriginales, termino]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modoBuscar) {
      setSearchId('');                  // Limpiamos búsqueda por ID
      setProductos(productosFiltrados); // Mostramos lo filtrado
      setVistaActual('descripcion');    // Indicamos que la vista actual es la búsqueda por descripción
      setModoBuscar(false);
    } else {
      setProductos(productosOriginales); // Restauramos todo
      setTermino('');
      setModoBuscar(true);
      setVistaActual('general');         // Vista vuelve a general
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
      <input
        type="text"
        placeholder="Buscar por descripción"
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
      />
      <button type="submit">
        {modoBuscar ? 'Buscar' : 'Limpiar'}
      </button>
    </form>
  );
}

export default SearchBar;
