import { Link } from "react-router-dom"

const Header =()=> {

    return (
        <header>
        <div className="container pt-2">
            <nav className="navbar navbar-expand-lg top-nav" id="topNav">
                <h1 className="heading">
                    <Link to="/">
                        Tame Games!
                    </Link>
                </h1>
            </nav>
        </div>
    </header>
    )
}

export default Header