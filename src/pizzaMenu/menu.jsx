import Pizza from "./Pizza";

const Menu = () => {
    return (
        <section className="menu">
        <div className="container">
            <h2>our menu</h2>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
            <ul className="pizzas">
                <Pizza/>
            </ul>
        </div>
        </section>
    )
}

export default Menu;