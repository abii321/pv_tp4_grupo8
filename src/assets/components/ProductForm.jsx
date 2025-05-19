import { useState, useEffect } from "react";

function ProductForm({ productos, setProductos, productoEditado, setProductoEditado }) {
  // Declaracion de elementos del Producto 
  const [id, setId] = useState(1);
  const [producto, setProducto] = useState('');
  const [marca, setMarca] = useState('');
  const [precio, setPrecio] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [precioConDesc, setPrecioConDesc] = useState(0);
  const [stock, setStock] = useState(0);
  const [estado, setEstado] = useState(true);

  useEffect(() => {
    if (productoEditado) {
      setId(productoEditado.id);
      setProducto(productoEditado.producto);
      setMarca(productoEditado.marca);
      setPrecio(productoEditado.precio);
      setDescuento(productoEditado.descuento);
      setPrecioConDesc(productoEditado.precioConDesc);
      setStock(productoEditado.stock);
    }
  }, [productoEditado]);

  // Agregar un Producto
  const agregar = (e) => {
    e.preventDefault();
    const nuevoProducto = {
      id,
      producto,
      marca,
      precio,
      descuento,
      precioConDesc: precio - (descuento * precio) / 100,
      stock,
    };

    if (productoEditado) {
      setProductos(
        productos.map((p) => (p.id === productoEditado.id ? nuevoProducto : p))
      );
      setProductoEditado(null); 
    } else {
      setProductos([...productos, nuevoProducto]);
      setId(id + 1);
    }

    setProducto('');
    setMarca('');
    setPrecio(0);
    setDescuento(0);
    setPrecioConDesc(0);
    setStock(0);
  }

  return (
    <div>
      {/**<h1>{productoEditado ? "Editar Producto" : "Listado de Productos"}</h1>**/}
      <h1>Listado de Productos</h1>
      <form onSubmit={agregar}>
      <label>ID</label>
        <input type='number' value={id} onChange={(e) => setId(e.target.value)} disabled/>
        <label>Nombre</label>
        <input type="text" value={producto} placeholder='Ingrese un producto' onChange={(e) => setProducto(e.target.value)} required></input>
        <label>Marca</label>
        <input type="text" value={marca} placeholder='Ingrese la descripcion' onChange={(e) => setMarca(e.target.value)} required></input>
        <label>Precio</label>
        <input type="number" value={precio} placeholder='Ingrese precio' onChange={(e) => setPrecio(e.target.value)} required  min ="1"></input>
        <label>Descuento</label>
        <input type="number" value={descuento} placeholder='Ingrese descuento' onChange={(e) => setDescuento(e.target.value)} required></input>
        <label>Precio con Descuento</label>
        <input type="number" value={precio-descuento*precio/100} onChange={(e) => setPrecioConDesc(e.target.value)} disabled></input>
        <label>Stock</label>
        <input type="number" value={stock} placeholder='Ingrese stock disponible' onChange={(e) => setStock(e.target.value)} required  min ="1"></input>

        <button type="submit">{productoEditado ? "Actualizar" : "Agregar"}</button>
      </form>
    </div>
  );
}

export default ProductForm;
