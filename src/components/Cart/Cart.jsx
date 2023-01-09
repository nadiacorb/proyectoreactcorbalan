import { Productos } from "../../mock";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";
import Style from './styles/Cart.scss';

const Cart = () => {

  const sendOrder = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection,order).then(({id})=> alert(id))
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
      {Productos.map((producto) => {
        return (
          <div className="product-card">
            <img src={producto.img} />
            <p>{producto.name}</p>
            <p>$ {producto.precio}</p>
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
