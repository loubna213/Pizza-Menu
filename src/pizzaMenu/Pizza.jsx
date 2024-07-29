import pizzaData from './data'

const Pizza = () => {

    const pizzaElements = pizzaData.map((pizza, index) => (
        <li key={index} className="pizza">
            <img src={pizza.photoName} alt="piza photo" />
            <h1>{pizza.name}</h1>
            <p>{pizza.ingredients}</p>
            <p>${pizza.price}</p>
            <p>{pizza.soldOut}</p>
        </li>
    ))

    return (
        <>
            {pizzaElements}
        </>
    )
}

export default Pizza;