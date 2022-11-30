import React from 'react';
import Cartwidget from '../Cartwidget/Cartwidget';
import Style from './styles/NavBar.scss'

const NavBar = () => {
	return (
    <div>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Promociones</a></li>
                <li><a href="#">Envios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <Cartwidget/>
        </nav>
        
    </div>
    );
};
    


export default NavBar;
    