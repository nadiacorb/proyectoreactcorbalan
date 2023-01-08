import React from 'react';
import Image from './Cartwidget.png';
import Style from './styles/Cartwidget.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
<<<<<<< HEAD
import Image from './Cartwidget.png';
import Style from './styles/Cartwidget.scss'
=======
>>>>>>> revision

const Cartwidget = () => {
    const {count} = useContext(CartContext)
    
	return (
		<div className='style__card'>
		    <img src={Image}/>
       <p>{count}</p>
       <Link to="/cart" className='style__card--button'> Terminar compra</Link>
		</div>
    
)
};

export default Cartwidget;