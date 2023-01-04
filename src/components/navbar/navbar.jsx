import {Link} from 'react-router-dom';
import React from 'react';
import Cartwidget from '../Cartwidget/Cartwidget';
import Style from './styles/NavBar.scss';

    const Navbar = ({menus, categorias}) =>{
    	return(
            <div>
        <nav>
           {
            menus.map((menu)=>{
                    return <Link className='navbar__menu' to={menu.href} > {menu.name}</Link>
                })
            } 
            {
            categorias.map((categoria)=>{
                    return <Link to={`/category/${categoria.id}`} className='navbar__menu' data-replace={`${categoria.name}`}>
              <span>{categoria.name}</span> </Link>
                  })
                }
                <Cartwidget/>
        </nav>
        </div>
        )
    }
    

export default Navbar;