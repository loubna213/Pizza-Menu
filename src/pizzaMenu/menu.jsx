import Pizza from "./Pizza";
import pizzaData from './data'

const Menu = () => {

    const pizzaElements = pizzaData.map((pizza, index) => (
        <Pizza key={index} {...pizza}/>
    ))


    return (
        <section className="menu">
        <div className="container">
            <h2>our menu</h2>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
            <ul className="pizzas">
                {pizzaElements}
            </ul>
        </div>
        </section>
    )
}

export default Menu;