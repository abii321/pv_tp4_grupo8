import { useState, useMemo, useEffect } from 'react';

function SearchById({ productos, setProductosFiltrados }) {
  const [termino, setTermino] = useState('');
  const [modoBuscar, setModoBuscar] = useState(true);

  
  const resultadoMemo = useMemo(() => {
    return productos.filter(p => p.id.toString() === termino);
  }, [productos, termino]);

  
  useEffect(() => {
    if (!modoBuscar && termino !== '') {
      console.log('Resultado de búsqueda por ID:', resultadoMemo);
    }
  }, [resultadoMemo, modoBuscar, termino]);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (modoBuscar) {
      setProductosFiltrados(resultadoMemo);
      console.log('Filtro aplicado, resultado:', resultadoMemo);
      setModoBuscar(false);
    } else {
      setProductosFiltrados([]);
      setTermino('');
      setModoBuscar(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Buscar por ID"
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
        required
      />
      <button type="submit">{modoBuscar ? 'Buscar' : 'Limpiar'}</button>
    </form>
  );
}

export default SearchById;
