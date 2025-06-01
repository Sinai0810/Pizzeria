import React from 'react'
import Header from './Header'
import napolitanaImg from '../assets/imgs/napolitana.jpg';
import espanolaImg from '../assets/imgs/espanola.jpg';
import pepperoniImg from '../assets/imgs/peperoni.jpg';
import Cards from './Cards'
const Home = () => {
  return (
    <div>
        <Header/> 
        
        <section className='cards-container'>
        <Cards imagen={napolitanaImg}  titulo="Pizza Napolitana" ingredientes="Ingredientes:" descripcion="Mozzarella, toamte, jamón, oregano." precio="Precio: $11.99" />

        <Cards imagen={espanolaImg} titulo="Pizza Española" ingredientes= "Ingredientes:" descripcion="Mozzarella, gorgonzola, parmesano, provolone." precio="Precio: $15.99" />

        <Cards imagen= {pepperoniImg} titulo="Pizza Pepperoni" ingredientes="Ingredientes:" descripcion="Mozzarela, pepperoni, oregano." precio="Precio: $10.99" />
      </section>
      
    </div>
  )
}

export default Home
