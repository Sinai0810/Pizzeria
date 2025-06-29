import React from 'react'
import { Link } from 'react-router-dom';

const Cards = (props) => {
  return (

    <article className='card-container'>
        
        <img src = {props.pizza.img} />
        <h2> {props.pizza.name}</h2>
        <hr />
        <ul className='list-container'>
          {props.pizza.ingredientes.map ((ingrediente, index) => 
          <li className= 'ingrediente-list' key={index}> {ingrediente} </li> 
          )}
        </ul>

        <p className='descripcion'> {props.descripcion}</p>
        <hr />
        <h3 className='precio'> ${props.pizza.precio}</h3>

        <button className='ver-mas'> Ver más </button>

       
        <button className='agg-al-carrito'> Agregar al Carrito </button>
        
        
       
    </article>
  )
}

export default Cards;
