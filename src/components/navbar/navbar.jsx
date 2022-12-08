import {link} from 'react-router-dom';
import React from 'react';
import Cartwidget from '../Cartwidget/Cartwidget';
import Style from './styles/NavBar.scss'

    const NavBar = ({menus, categorias}) => {
    	return (
        <nav>
            menus.map((menu)=>{
                    return <Link className='navbar__menu' to={menu.href} > {menu.name}</Link>
                })
                
            {
            categorias.map((categorias)=>{
                    return <Link to={'/category/${categoria.id}'} className='navbar__menu'> {categoria.name}</Link>
                  })
                }
                <Cartwidget/>
        </nav>
        );
    };
    


export default NavBar;