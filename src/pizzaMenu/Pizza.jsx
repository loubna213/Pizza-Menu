

const Pizza = ({photoName, name, ingredients, price, soldOut}) => {
    return (
        <li className="pizza">
            <img src={photoName} alt={name} />
            <h1>{name}</h1>
            <p>{ingredients}</p>
            <p>${price}</p>
            <p>{soldOut}</p>
        </li>
    )
}

export default Pizza;