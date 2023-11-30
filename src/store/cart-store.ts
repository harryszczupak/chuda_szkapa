import { createStore } from 'redux';
export type defaultCartState = {
	items: updated[];
	totalAmount: number;
	totalQuantity: number;
};
export type updated = {
	id: string;
	name: string;
	price: number;
	quantatity: number;
};
const defaultState: defaultCartState = {
	items: [],
	totalAmount: 0,
	totalQuantity: 0,
};
const reducer = (state = defaultState, action: any) => {
	if (action.type === 'ADD') {
		let updatedItems: updated[];
		const existedElement = state.items.find(
			(el) => el.id === action.payload.id
		);
		const existingIndex = state.items.findIndex(
			(el) => el.id === action.payload.id
		);
		localStorage.setItem('items', JSON.stringify(state.items));
		if (existedElement) {
			let updatedItem;
			updatedItem = {
				...existedElement,
				quantatity: existedElement.quantatity! + 1,
			};
			updatedItems = [...state.items];
			updatedItems[existingIndex] = updatedItem;
			return {
				items: updatedItems,
				totalAmount: state.totalAmount + action.payload.price,
				totalQuantity: state.totalQuantity + 1,
			};
		} else {
			updatedItems = state.items.concat(action.payload);
			return {
				items: updatedItems,
				totalAmount: +state.totalAmount + +action.payload.price,
				totalQuantity: state.totalQuantity + 1,
			};
		}
	}
	if (action.type === 'CLEAR') {
		return defaultState;
	}
	return defaultState;
};

const store = createStore(reducer);
export default store;
