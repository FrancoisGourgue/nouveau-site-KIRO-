import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav id="mainNav" class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/">Accueil</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/">Équipes</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/register">Inscription</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/">Connexion</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default Navbar