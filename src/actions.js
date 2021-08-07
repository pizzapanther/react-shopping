export function toggleInCart (data) {
	return {
    type: 'TOGGLE_IN_CART',
    data: data
  }
}

export function addItem (data) {
	return {
    type: 'ADD_ITEM',
    data: data
  }
}
