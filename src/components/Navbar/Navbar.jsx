import { Link } from 'react-router-dom';
import logoConstancia from '../../assets/logoConstancia.png';
import './navbar.css';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logoConstancia} alt="Logo Constancia" />
                </Link>
                <p>Amor, <br /> Cuidado e <br /> Aprendizado</p>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/pre-matricula">{props.firstLink}</Link>
                </li>
                <li>
                    <Link to="/funcionario">{props.secondLink}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
