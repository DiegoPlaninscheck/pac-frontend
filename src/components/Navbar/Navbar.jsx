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
                    <Link to={`/${props.firstLink.link}`}>{props.firstLink.title}</Link>
                </li>
                <li>
                    <Link to={`/${props.secondLink.link}`}>{props.secondLink.title}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
