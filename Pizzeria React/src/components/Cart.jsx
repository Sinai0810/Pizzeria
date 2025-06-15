import React from 'react'
import { useState } from 'react';
import { pizzaCart} from './pizzas';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // 🔼 Aumentar cantidad
  const aumentar = (id) => {
    const actualizado = cart.map(p =>
      p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
    );
    setCart(actualizado);
  };

  // 🔽 Disminuir cantidad y eliminar si llega a 0
  const decrementar = (id) => {
    const actualizado = cart
      .map(p =>
        p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
      )
      .filter(p => p.cantidad > 0); // elimina si cantidad llega a 0
    setCart(actualizado);
  };

  // 🧮 Calcular el total
  const total = cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <section className='cards-container'>
      <h2>Detalles del pedido:</h2>

      {cart.map(p => (
        <article key={p.id} className="producto">
          <img src={p.img} alt={p.nombre} width="50" />
          <span>{p.nombre}</span>
          <span>${p.precio.toLocaleString()}</span>

          <div>
            <button className='btn-menos' onClick={() => decrementar(p.id)}>-</button>
            <span>{p.cantidad}</span>
            <button className='btn-mas' onClick={() => aumentar(p.id)}>+</button>
          </div>
        </article>
      ))}

      <h2>Total: ${total.toLocaleString()}</h2>
      <button className='btn-pagar'>Pagar</button>
    </section>
  );
};


export default Cart
