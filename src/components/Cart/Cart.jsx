import React from 'react';
import { Productos } from "../../mock";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";

const Cart = () => {
    const order = {
        buyer: {
          name: "nadia",
          phone: "12345678",
          email: "nadia.corbalan@live.com.ar",
        },
        items: [
          {
            name: "Chapa galvanizada",
            price: 5000,
          },
        ],
        total: 5000,
      };
    
  const sendOrder = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection,order).then(({id})=> alert(id))
  };

  const updateOrder = () =>{
    const db = getFirestore()
    const orderDoc = doc(db,"orders","FuxjLyC5qKn01WgyEPWr");
    updateDoc(orderDoc,{buyer:{email:"email",name:'ayelen',phone:"54321",},total:6000}).then(res => alert("actualizado"));
  }

  return (
    <div>
      <h1>Finalizar compra</h1>
      <div className="producto-comprador">
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
          <div className="productos-decarrito">
            <img src={producto.img} width={50} height={50} />
            <p>{producto.name}</p>
            <p>{producto.price}</p>
          </div>
        );
      })}
      <div>
        <button onClick={()=>sendOrder()}>Crear pedido</button>
      </div>
      <div>
        <button onClick={()=>updateOrder()}>Actualizar pedido</button>
      </div>
    </div>
  );
};

export default Cart;