

const Pizza = ({photoName, name, ingredients, price, soldOut}) => {
    return (
        <li className={`pizza ${soldOut ? 'sold-out' : null}`}>
            <img src={photoName} alt={name} />
            <div>
                <h1>{name}</h1>
                <p>{ingredients}</p>
                <span>{soldOut ? 'SOLD OUT' : '$' + price}</span>
            </div>
        </li>
    )
}

export default Pizza;