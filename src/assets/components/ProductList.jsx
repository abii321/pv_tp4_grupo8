function ProductList( { productos , eliminarProducto } ) {
    return (
        <div>
            <ul>
                { 
                    productos.map( p=> 
                        <li key={p.id}>
                            {p.id} - {p.producto} - {p.descripcion} - ${p.precio} - {p.descuento}% - ${p.precioConDesc} - {p.stock}
                            <button onClick={() => eliminarProducto(p.id)}>Eliminar</button>
                        </li> 
                    )
                }
            </ul>
        </div>  
  )
}

export default ProductList