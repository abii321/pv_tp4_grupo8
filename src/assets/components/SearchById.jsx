import { useState, useMemo } from 'react';

function SearchById({ productos }) {
  const [termino, setTermino] = useState('');
  const [buscar, setBuscar] = useState('');

  const productosFiltrados = useMemo(() => {
    if (!buscar) return [];
    return (productos || []).filter(p => p.id.toString() === buscar);
  }, [productos, buscar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBuscar(termino);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Buscar por ID"
          value={termino}
          onChange={(e) => setTermino(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <ul>
        {productosFiltrados.map(p => (
          <li key={p.id}>
            {p.id} - {p.producto} - {p.descripcion} - ${p.precio} - {p.descuento}% - ${p.precioConDesc} - {p.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchById;
