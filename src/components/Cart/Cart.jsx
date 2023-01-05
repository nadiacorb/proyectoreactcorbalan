import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const Cart = () =>{
    const {listaProducto} = useContext(CartContext)
    console.log(listaProducto[0])
    return
    (<div> {
        listaProducto[0].map((lp)=>{
           return( 
           <div>
                <p>{lp.name}</p>
                <p>{lp.precio}</p>
            </div>
            )
        })
    }
    </div>)

}

export default Cart;