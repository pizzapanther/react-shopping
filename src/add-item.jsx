import react from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {addItem} from './actions.js';


export class AddItem extends (react.Component) {
	constructor(props) {
		super(props);

		this.state = {item: ''};
	}

	handleSubmit(event) {
		console.log(event);
		event.preventDefault();

		if (!this.state.item) {
			alert('Stop being stupid!!');
		} else {
			this.props.addItem({name: this.state.item});
			this.setState({item: ''});
		}
	}

	updateItem(event) {
		this.setState({item: event.target.value});
	}

	go_back(event) {
		this.props.history.push('/');
	}

	render() {
		return (
			<form onSubmit={(e) => this.handleSubmit(e) }>
				<Card style={{maxWidth: '500px', margin: '30px auto'}}>
					<CardContent>
						<TextField label="Item Name" value={this.state.item} onChange={(e) => this.updateItem(e)}/>
					</CardContent>
					<CardActions>
						<Button type="submit" color="primary" variant="contained">Add Item</Button>
						<Button type="button" onClick={(e) => this.go_back(e)}>Go Back to List</Button>
					</CardActions>
				</Card>
			</form>
		);
	}
}

function mapStateToProps (state) {
	return {};
}

function mapDispatchToProps (dispatch) {
	return {
    addItem: function (data) {
      dispatch(addItem(data))
    }
  }
}

var ConnectedAddItem = connect(mapStateToProps, mapDispatchToProps)(AddItem);
export default ConnectedAddItem;
