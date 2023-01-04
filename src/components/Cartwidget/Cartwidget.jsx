import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Image from './Cartwidget.png';
import Style from './styles/Cartwidget.scss'

const Cartwidget = () => {
    const {count} = useContext(CartContext);
    
	return (
		<div>
		    <img src={Image}/>
		    <div>
		       <p>{count}</p> 
		    </div>
		    <Link to="/Cartwidget">Finalizar compra</Link>
		</div>
);
};

export default Cartwidget;