import { useState, useMemo } from 'react';

function SearchBar({ productosOriginales, setSearchId }) {
  const [termino, setTermino] = useState('');
  const [buscar, setBuscar] = useState('');
  const [modoBuscar, setModoBuscar] = useState(true);

  const productosFiltrados = useMemo(() => {
    if (buscar === '') return [];
    return productosOriginales.filter(p => {
      const desc = (p.marca || '').toLowerCase().trim();
      const valor = buscar.toLowerCase().trim();
      return desc.includes(valor);
    });
  }, [productosOriginales, buscar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modoBuscar) {
      setSearchId('');
      setBuscar(termino);
      setModoBuscar(false);
    } else {
      setBuscar('');
      setTermino('');
      setModoBuscar(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Buscar por marca"
          value={termino}
          onChange={(e) => setTermino(e.target.value)}
        />
        <button type="submit">{modoBuscar ? 'Buscar' : 'Limpiar'}</button>
      </form>

      {buscar && (
        productosFiltrados.length > 0 ? (
          <ul>
            {productosFiltrados.map(p => (
              <li key={p.id}>
                {p.id} - {p.producto} - {p.marca} - ${p.precio} - {p.descuento}% - ${p.precioConDesc} - {p.stock}
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron productos con esa descripción.</p>
        )
      )}
    </div>
  );
}

export default SearchBar;
