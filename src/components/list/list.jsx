import React from 'react';

const List =({lista}) =>{
	return(
		<div>
		{
			lista.map((lista)=>{
                return <div>{lista}</div>
			})
		}
        </div>
		)
}

export default List;