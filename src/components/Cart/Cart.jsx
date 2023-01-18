import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";
import Style from './styles/Cart.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



const Cart = () => {
    
    const {cart} = useContext(CartContext);

  const sendOrder = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection,orders).then(({id})=> alert(id))
  };

  
  return (
    <div>
      <h1>Terminar compra</h1>
      <div className="form-buyer">
        <div>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label>Dirección</label>
          <input type="text" />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
      </div>
      {cart.map((producto) => {
        return (
          <div className="product-card">
            <img src={producto.img} />
            <p>{producto.name}</p>
            <p>$ {producto.price}</p>
          </div>
        );
      })}
      <div>
        <button onClick={()=>sendOrder()}>Generar order</button>
      </div>
    </div>
  );
};

export default Cart;
