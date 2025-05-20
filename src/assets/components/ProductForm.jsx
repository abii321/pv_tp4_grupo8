import { useState, useEffect } from "react";

function ProductForm({ productos, setProductos, productoEditado, setProductoEditado }) {
  const [producto, setProducto] = useState('');
  const [marca, setMarca] = useState('');
  const [precio, setPrecio] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [precioConDesc, setPrecioConDesc] = useState(0);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    if (productoEditado) {
      setProducto(productoEditado.producto);
      setMarca(productoEditado.marca);
      setPrecio(productoEditado.precio);
      setDescuento(productoEditado.descuento);
      setPrecioConDesc(productoEditado.precioConDesc);
      setStock(productoEditado.stock);
    }
  }, [productoEditado]);

  const limpiarFormulario = () => {
    setProducto('');
    setMarca('');
    setPrecio(0);
    setDescuento(0);
    setPrecioConDesc(0);
    setStock(0);
  }

  const agregar = (e) => {
    e.preventDefault();

    const nuevoPrecioConDesc = precio - (descuento * precio) / 100;

    const nuevoProducto = {
      id: productoEditado
        ? productoEditado.id
        : productos.length > 0
        ? Math.max(...productos.map(p => p.id)) + 1
        : 1,
      producto,
      marca,
      precio,
      descuento,
      precioConDesc: nuevoPrecioConDesc,
      stock,
    };

    if (productoEditado) {
      setProductos(
        productos.map((p) =>
          p.id === productoEditado.id ? nuevoProducto : p
        )
      );
      setProductoEditado(null);
    } else {
      setProductos([...productos, nuevoProducto]);
    }

    limpiarFormulario();
  }

  return (
    <div>
      <h1>Listado de Productos</h1>
      <form onSubmit={agregar}>
        <label>ID</label>
        <input
          type="text"
          value={
        productoEditado ? productoEditado.id : productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1 }
        disabled
        />
        <label>Nombre</label>
        <input type="text" value={producto} onChange={(e) => setProducto(e.target.value)} required />
        <label>Marca</label>
        <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} required />
        <label>Precio</label>
        <input type="number" value={precio} onChange={(e) => setPrecio(Number(e.target.value))} required min="1" />
        <label>Descuento (%)</label>
        <input type="number" value={descuento} onChange={(e) => setDescuento(Number(e.target.value))} required />
        <label>Precio con Descuento</label>
        <input type="number" value={precio - descuento * precio / 100} disabled />
        <label>Stock</label>
        <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} required min="1" />

        <button type="submit">{productoEditado ? "Actualizar" : "Agregar"}</button>
      </form>
    </div>
  );
}

export default ProductForm;
