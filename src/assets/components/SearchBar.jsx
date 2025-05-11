import { useState, useMemo } from 'react';

function SearchBar({ productos }) {
    const [termino, setTermino] = useState('');

    const productosFiltrados = useMemo(() => {
    return productos.filter(p =>
        p.descripcion.toLowerCase().includes(termino.toLowerCase())
    );
    }, [productos, termino]);

    return (
    <div>
        <input
        type="text"
        placeholder="Buscar por descripción"
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
        />
        <ul>
        {
            productosFiltrados.map(p => (
            <li key={p.id}>
                {p.id} - {p.producto} - {p.descripcion} - ${p.precio} - {p.descuento}% - ${p.precioConDesc} - {p.stock}
            </li>
            ))
        }
        </ul>
    </div>
    );
}

export default SearchBar;
