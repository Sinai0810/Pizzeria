import { useState, createContext } from "react";
import { pizzaCart} from '../components/pizzas';


//se crea el contexto
 export const CartContext = createContext();

 //se crea el componente proveedor 
 export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    //agregar producto al carrito

    const addToCart = (product) => {
        console.log('Agregando producto al carrito:', product);
        const itemInCart = cartItems.find((item) =>item.id === product.id);

        if (itemInCart) {
            setCartItems((prev) =>
                prev.map((item) =>
                    item.id === product.id ? 
             { ...item, quantity: item.quantity + 1 }
            : item

        )
    );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    };

    // eliminar el producto

    const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };
  
  //cambiar cantidad

 const updateQuantity = (productId, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  //calcular total

   const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,updateQuantity,getTotal}}> 
        {children}
        </CartContext.Provider>
    );

 }
