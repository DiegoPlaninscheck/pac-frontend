import { Link } from 'react-router-dom';
import logoConstancia from '../../assets/logoConstancia.png';
import './navbar.css';

const Navbar = () => {
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
                    <Link to="/pre-matricula">PRÉ-MATRÍCULA</Link>
                </li>
                <li>
                    <Link to="/funcionario">FUNCIONÁRIO</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
