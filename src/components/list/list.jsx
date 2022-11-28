import PropTypes from 'prop-types'
const List =({lista}) =>{
	return(
		<div>
		{
			lista.map((lista)=>{
				return <div>{lista}<div/>
			})
		}
		<div/>
		)
}

List.proptype = {
	lista: Proptypes.array.isRequired
}

export default List;