import React, { useState } from 'react';
import './Navbar.css'; // Importar o CSS para estilização
import { Link } from 'react-router-dom';
import Start from './Start';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header>
            <div className="navbar">
                <nav className="nav-menu">
                    <ul>
                        <li><Link to="/start">Inicio</Link></li>
                        <li><Link to="/atividade">Atividade</Link></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Contato</a></li>
                        <li className="dropdown">
                            <a href="#" onClick={toggleDropdown}>MINHAS TURMAS</a>
                            {dropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><a href="#">1º A </a></li>
                                    <li><a href="#">1º B </a></li>
                                    <li><a href="#">2º C</a></li>
                                    <li><a href="#">3º D</a></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
