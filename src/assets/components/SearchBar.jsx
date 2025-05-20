import { useState } from 'react';

function SearchBar({ productosOriginales, setProductos }) {
  const [termino, setTermino] = useState('');
  const [modoBuscar, setModoBuscar] = useState(true); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modoBuscar) {
      const filtrados = productosOriginales.filter(p =>
        p.descripcion.toLowerCase().includes(termino.toLowerCase()) ||
        p.producto.toLowerCase().includes(termino.toLowerCase())
      );
      setProductos(filtrados);
      setModoBuscar(false);
    } else {
      setProductos(productosOriginales);
      setTermino('');
      setModoBuscar(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
      <input
        type="text"
        placeholder="Buscar por descripción o marca"
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
