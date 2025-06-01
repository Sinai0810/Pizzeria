import React from 'react'

const Cards = (props) => {
  return (

    <article className='card-container'>
        
        <img src = {props.imagen} alt={props.alt} />
        <h2> {props.titulo}</h2>
        <hr />
        <h3> {props.ingredientes}</h3>
        <p> {props.descripcion}</p>
        <hr />
        <h3 className='precio'> {props.precio}</h3>
        <button className='ver-mas'> Ver más </button>
        <button className='agg-al-carrito'> Agregar al Carrito
        </button>
        
       
    </article>
  )
}

export default Cards;
