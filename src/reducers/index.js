import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import doucment from './document'
import elements from './elements'

export default combineReducers ({
	doucment,
	elements,
	form: formReducer
})