import { useState } from 'react';
import React from 'react';
import {collection, doc, getDoc, getDocs, getFirestore,} from "firebase/firestore";
import Style from './styles/ItemListContainer.scss';
import {Productos,categorias} from '../../mock';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const ItemListContainer=({})=>{
    const [item, setItem] = useState([]);
    const [itemcopy, setItemCopy] = useState(item);
    const {id} = useParams()
    
    const FilterCategory = () => { 
        if(id && itemcopy) {
         const newProductos = itemcopy.filter((p) => p.category == id);
      return newProductos;
        }
        else {
            return itemcopy;
        }
    };
    
   useEffect(() => {
    const filtro = FilterCategory();
    setItem(filtro);
  }, [id]);

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = collection(db, "item");

    getDocs(itemCollection).then((result) => {
      setItem(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setItemCopy(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div>
      {item && item.map((producto) => {
          return <Item producto={producto} />;
        })}
    </div>
  );
};

 	return(
        <div className='productos__img'>
            {
            item && item.map((producto)=>{
                    return <Item producto={producto}/>
            })
}
</div>
)}

export default ItemListContainer;