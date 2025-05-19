function ProductList({ productos, eliminarProducto }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Descuento</th>
                        <th>Precio con Descuento</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        productos.map(p =>
                            <tr key={p.id}>
                                    <td>{p.id} </td>
                                    <td>{p.producto}</td>
                                    <td>{p.marca} </td>
                                    <td>${p.precio}</td>
                                    <td>{p.descuento}%</td>
                                    <td>${p.precioConDesc}</td>
                                    <td>{p.stock}</td>
                                    <td><button onClick={() => eliminarProducto(p.id)}>Eliminar</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ProductList