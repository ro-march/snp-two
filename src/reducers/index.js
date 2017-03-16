import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import doucment from './document'
import element from './element'

export default combineReducers ({
	doucment,
	element,
	form: formReducer
})