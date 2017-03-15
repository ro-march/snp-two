import {
	ADD_ELEMENT,
	REMOVE_ELEMENT,
	SEND_DOCUMENT,
	CHANGE_ELEMENT
} from '../constants/Document'


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

export function RemoveElement(element) {
	
	return (dispatch) =>
	{
		dispatch({
			type: REMOVE_ELEMENT,
			payload: element
		})
	}
}

export function SendDocument(document) {
	
	return (dispatch) =>
	{
		dispatch({
			type: SEND_DOCUMENT,
			payload: document
		})
	}
}

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