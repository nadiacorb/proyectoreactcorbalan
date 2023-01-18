import { useState } from "react"
import Style from './styles/ItemCount.scss';

const ItemCount =({onAddToCart})=>{
    const [count,setCount] = useState(1)

    const handlerAddCount = () =>{
        setCount(count + 1)
        onAddToCart (count + 1)
    }
    const handlerSubtractionCount = () =>{
        setCount(count - 1)
        onAddToCart(count - 1)
    }
    return(
        <div className='contador'>
           <div>
            <h4>Agregar producto</h4>
            <button onClick={()=>handlerSubtractionCount()}>-</button>
            <p>{count}</p>
            <button onClick={()=>handlerAddCount()}>+</button>
            </div>
            <div className='button__card'>
            <button onClick= {() => {onAddToCart(count)}}>Agregar al carro</button>
            </div>
    </div>
    )
}
export default ItemCount;
