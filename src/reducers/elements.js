import {
	ADD_ELEMENT,
	CHANGE_ELEMENT
} from '../constants/Document'


const initState = [{
	name: '',
	count: 1,
	cost: 0
}]


export default function elements(state = initState, action) {

	switch( action.type ) {

		case CHANGE_ELEMENT:
			if (state.length > 0)
				state[state.length -1] = {name: action.payload.name, count: action.payload.count, cost: action.payload.cost}
			return [...state]

		case ADD_ELEMENT:
			return [...state, {name: '', count: 1, cost: 0} ]


		default:
			return state;
	}
}