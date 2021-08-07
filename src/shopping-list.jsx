import react from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {toggleInCart} from './actions.js';

class ShoppingList extends (react.Component) {
	handleChange(event, index) {
		this.props.toggleInCart({index});
	}

	strikeStyle(index) {
		if (this.props.shopping_list[index].in_cart) {
			return {textDecoration: 'line-through'};
		}

		return {};
	}

	render() {
		return (
			<Card style={{maxWidth: '500px', margin: '30px auto'}}>
				<CardContent>
					<List>
						{this.props.shopping_list.map((item, index) => {
						  return <ListItem key={index} dense divider>
						    <FormControlLabel
					        control={
					          <Checkbox
					            checked={item.in_cart}
					            onChange={(e) => this.handleChange(e, index)}
					            color="primary"
					          />
					        }
					        label={item.name}
					        style={this.strikeStyle(index)}
					      />
						  </ListItem>;
						})}
					</List>
				</CardContent>
				<CardActions>
					<Button>Add Item</Button>
				</CardActions>
			</Card>
		);
	}
}

function mapStateToProps (state) {
	return {shopping_list: state.shopping_list};
}

function mapDispatchToProps (dispatch) {
	return {
    toggleInCart: function (data) {
      dispatch(toggleInCart(data))
    }
  }
}

var ConnectedShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
export default ConnectedShoppingList;
