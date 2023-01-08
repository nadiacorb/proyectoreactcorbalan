import { Productos } from "../../mock";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";

const Cart = () => {

  const sendOrder = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection,order).then(({id})=> alert(id))
  };

  
  return (
    <div>
      <h1>Terminar compra</h1>
      <div className="producto-buyer">
        <div>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label>dirección</label>
          <input type="text" />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="text" />
        </div>
      </div>
      {Productos.map((producto) => {
        return (
          <div className="product-compra">
            <img src={producto.img} />
            <p>{producto.name}</p>
            <p>{producto.precio}</p>
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