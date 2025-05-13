import { useState, useMemo } from 'react';

function SearchBar({ productos }) {
    const [termino, setTermino] = useState('');
    const [buscar, setBuscar] = useState('');

    const productosFiltrados = useMemo(() => {
    return productos.filter(p =>
        p.descripcion.toLowerCase().includes(buscar.toLowerCase())
    );
    }, [productos, buscar]);

    const handleSubmit = (e) => {
    e.preventDefault();
    setBuscar(termino);
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Buscar por descripción"
            value={termino}
            onChange={(e) => setTermino(e.target.value)}
        />
        <button type="submit">Buscar</button>
        </form>

        {
        buscar && productosFiltrados.length > 0 && (
            <ul>
            {productosFiltrados.map(p => (
                <li key={p.id}>
                {p.id} - {p.producto} - {p.descripcion} - ${p.precio} - {p.descuento}% - ${p.precioConDesc} - {p.stock}
                </li>
            ))}
            </ul>
        )
        }

        {
        buscar && productosFiltrados.length === 0 && (
            <p>No se encontraron productos con esa descripción.</p>
        )
        }
    </div>
    );
}

export default SearchBar;
