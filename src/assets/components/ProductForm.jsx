import { useState } from "react";

function ProductForm( { productos, setProductos}) {
  const [ id, setId] = useState(1);
  const [ producto, setProducto ] = useState('');
  const [ descripcion, setDescripcion ] = useState('');
  const [ precio, setPrecio ] = useState(0);
  const [ descuento, setDescuento ] = useState(0);
  const [ precioConDesc, setPrecioConDesc ] =useState(0);
  const [ stock, setStock ] = useState(0);

  const agregar = (e) => {
    e.preventDefault();
    const nuevoProducto = {
      id,
      producto,
      descripcion,
      precio,
      descuento,
      precioConDesc: precio-(descuento*precio/100),
      stock
    };

    setProductos([...productos, nuevoProducto]);
    setId(id + 1);
    setProducto('');
    setDescripcion('');
    setPrecio(0);
    setDescuento(0);
    setPrecioConDesc(0);
    setStock(0);
  }

  return (
    <div>
      <h1> Productos </h1>
      <form onSubmit={agregar}>
        <label>ID</label>
        <input type='number' value={id} onChange={(e) => setId(e.target.value)} disabled/>
        <label>Nombre</label>
        <input type="text" value={producto} placeholder='Ingrese un producto' onChange={(e) => setProducto(e.target.value)} required></input>
        <label>Descripcion</label>
        <input type="text" value={descripcion} placeholder='Ingrese la descripcion' onChange={(e) => setDescripcion(e.target.value)} required></input>
        <label>Precio</label>
        <input type="number" value={precio} placeholder='Ingrese precio' onChange={(e) => setPrecio(e.target.value)} required  min ="1"></input>
        <label>Descuento</label>
        <input type="number" value={descuento} placeholder='Ingrese descuento' onChange={(e) => setDescuento(e.target.value)} required></input>
        <label>Precio con Descuento</label>
        <input type="number" value={precio-descuento*precio/100} onChange={(e) => setPrecioConDesc(e.target.value)} disabled></input>
        <label>Stock</label>
        <input type="number" value={stock} placeholder='Ingrese stock disponible' onChange={(e) => setStock(e.target.value)} required  min ="1"></input>

        <button type="submit" >Agregar</button>
      </form>

    </div>
  )
}

export default ProductForm
