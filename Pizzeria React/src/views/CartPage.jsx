import React from 'react'
import { useState } from 'react';
import { pizzaCart} from '../components/pizzas';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartPage = () => {
  const { token } = useContext(UserContext);
  const { cartItems, updateQuantity, removeFromCart, getTotal } = useContext(CartContext);

  return (
    <section className="cart-container">
      <h2> Detalles del pedido:</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío 🍕</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <article key={item.id} className="producto">
              <img src={item.img} alt={item.name} />
              <span className="producto-titulo">{item.name}</span>
              <span>${item.price.toLocaleString()}</span>

              <div className="cantidad-container">
                <button className="btn-menos" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button className="btn-mas" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>

              <button className='remove-btn' onClick={() => removeFromCart(item.id)}> Eliminar</button>
            </article>
          ))}

          <h2>Total: ${getTotal().toLocaleString()}</h2>
          <button className="btn-pagar" disabled={!token}>Pagar</button>
        </>
      )}
    </section>
  );
};

export default CartPage;

