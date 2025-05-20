import { useState, useMemo } from 'react';

function SearchBar({ productosOriginales, setSearchId, setProductosFiltrados }) {
  const [termino, setTermino] = useState('');
  const [modoBuscar, setModoBuscar] = useState(true);

  const resultadoMemo = useMemo(() => {
    return productosOriginales.filter(p =>
      (p.marca || '').toLowerCase().includes(termino.toLowerCase())
    );
  }, [productosOriginales, termino]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modoBuscar) {
      setSearchId('');
      setProductosFiltrados(resultadoMemo);
      setModoBuscar(false);
    } else {
      setProductosFiltrados([]);
      setTermino('');
      setModoBuscar(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Buscar por marca"
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
        required
        />
      <button type="submit">{modoBuscar ? 'Buscar' : 'Limpiar'}</button>
      </form>

{!modoBuscar && resultadoMemo.length === 0 && (
  <p style={{ color: 'red' }}>
    No se encontraron productos con la marca "{termino}".
  </p>
)}

    </>
  );
}

export default SearchBar;
