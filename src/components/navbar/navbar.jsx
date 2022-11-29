import React from 'react';
import Cartwidget from '../Cartwidget/Cartwidget';


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
        </nav>
        
        <Cartwidget/>
    </div>
    );
};
    


export default NavBar;
    