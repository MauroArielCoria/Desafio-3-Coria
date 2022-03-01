import CartWidget from "./CartWidget"

const Navbar =() => {
    return (
            <header>
                <h1>Calzados Silvia</h1>
                <CartWidget/>
                <nav>
                    <a href="#">Ojotas</a>
                    <a href="#">Zapatos</a>
                    <a href="#">Pantuflas</a>
                </nav>
            </header>
    )
}

export default Navbar