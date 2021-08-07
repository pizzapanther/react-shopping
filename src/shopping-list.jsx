import react from 'react';
import { connect } from 'react-redux';

class ShoppingList extends (react.Component) {
	render() {
		return (
			<div>
				<ul>
					{this.props.shopping_list.map((item, index) => {
					  return <li key={index}>
					    <input type="checkbox"/>
					    {item.name}
					  </li>;
					})}
				</ul>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {shopping_list: state.shopping_list};
}

var ConnectedShoppingList = connect(mapStateToProps)(ShoppingList);
export default ConnectedShoppingList;
