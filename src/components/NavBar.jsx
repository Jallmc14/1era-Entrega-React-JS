import logo from "../assets/images/logo.webp";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-secondary-subtle p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <a href="#">
                        <img src={logo} alt="AMWAY" width={220} />
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-secondary text-uppercase textoNavbar" href="#">Nutricion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary text-uppercase textoNavbar" href="#">Belleza</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary text-uppercase textoNavbar" href="#">Cuidado Personal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary text-uppercase textoNavbar" href="#">Hogar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;