import {
	ADD_ELEMENT,
	CHANGE_ELEMENT
} from '../constants/Document'


 //*** action add new element ***//
export function AddElement(name, count, cost) {
	return (dispatch) =>
	{
		dispatch({
			type: ADD_ELEMENT,
			payload: {
				name: name,
				count: count,
				cost: cost
			}
		})
	}
}


 //*** action change element ***//
export function ChangeElement(name, count, cost) {

	return (dispatch) =>
	{
		dispatch({
			type: CHANGE_ELEMENT,
			payload: {
				name: name,
				count: count,
				cost: cost
			}
		})
	}
}