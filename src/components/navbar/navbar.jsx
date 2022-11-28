import PropTypes from 'prop-types';
import './Navbar'; 
const Navbar = (menus, children) => {
	return(
		<div>
		<div>
		{
			menus.map((menu)=> {
				return 
				<p>Distribuidora de hierross<p/>
				<a href='#'>{menu}</a>
				<div>{Cardwidget}</div>

			})
			}
		</div>
		<div>
		{children}
		</div>
		)
}

Navbar.proptype ={
	menus: PropTypes.array.isRequired, I
	children: PropTypes.element
}

export default Navbar;