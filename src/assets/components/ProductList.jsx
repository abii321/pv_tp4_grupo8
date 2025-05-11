function ProductList( { productos } ) {
    return (
        <div>
            <ul>
                { 
                    productos.map( p=> 
                        <li key={p.id}>
                            {p.id} - {p.producto} - {p.descripcion} - ${p.precio} - {p.descuento}% - ${p.precioConDesc} - {p.stock}
                        </li> 
                    )
                }
            </ul>
        </div>  
  )
}

export default ProductList
