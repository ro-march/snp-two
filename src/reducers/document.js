import {
	SEND_DOCUMENT
} from '../constants/Document'


const initState = {
	document: null
}


export default function document(state = initState, action) {

	switch( action.type ) {

		case SEND_DOCUMENT:
			return Object.assign({}, state, { document: action.payload })

		default:
			return state;
	}
}