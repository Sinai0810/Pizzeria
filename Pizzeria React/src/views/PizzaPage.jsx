import React, { useEffect, useState } from 'react'

const PizzaPage = () => {
    const [pizza, setPizza] = useState([])

    useEffect(() => {
        consultarApi()
    }, [])
    const consultarApi = async () => {
        const url = 'http://localhost:5001/api/pizzas/p001';
        const response = await fetch(url);
        const data = await response.json()

        //setear constante para guardar lo obtenido 
        setPizza(data)

        if (!pizza) return <p>Cargando...</p>;

    }
    return (


        <article className='card-container'>

            <img src={pizza.img} alt={pizza.name} />
            <h2> {pizza.name}</h2>
            <p>{pizza.desc}</p>
            <p>{pizza.ingredients}</p>
            <p>{pizza.price}</p>





        </article>

    )
}

export default PizzaPage
