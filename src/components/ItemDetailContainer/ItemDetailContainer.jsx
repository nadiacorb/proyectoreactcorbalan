import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ItemDetailContainer =()=>{
    const {id} = useParams();
    const [producto,setProducto] = useState();
    
useEffect(() => {
    const db = getFirestore();
    const orderDoc = doc(db, "item", id);
    getDoc(orderDoc).then(result=>{
        if(result.exists()){
            setProducto({id:result.id , ...result.data()})
        }
    })
  }, [id]);  
   

    return producto ? <ItemDetail producto={producto} /> : <h1>cargando</h1>
    
}

export default ItemDetailContainer;
