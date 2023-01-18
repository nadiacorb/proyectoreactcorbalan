import {Link} from 'react-router-dom';
import React from 'react';
import Cartwidget from '../Cartwidget/Cartwidget';
import Style from './styles/NavbarPrincipal.scss';
import Image from './imagenacindar.png';

    const Navbar = ({menus, categorias}) =>{
    	return(
            <div>
            <img src={Image} className='imagen__portada'/>
        <nav>
           {
            menus.map((menu)=>{
                    return <Link className='navbar__menu' to={menu.href} > {menu.name}</Link>
                })
            } 
            {
            categorias.map((categoria)=>{
                    return <Link to={`/category/${categoria.id}`} className='navbar__menu'> <span>{categoria.name}</span></Link>
                  })
                }
                <Cartwidget/>
        </nav>
        </div>
        )
    }
    

export default Navbar;
