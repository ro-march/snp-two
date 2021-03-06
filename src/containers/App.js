import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Document from '../components/Document'
import Form from '../components/Form'
import * as userActions from '../actions/UserActions'


export class App extends Component {
	render() {
		const { ChangeElement, AddElement } = this.props.userActions
		const { elements, document } = this.props
		return (
			<div className="container">
				<Form changeElement={ChangeElement} addElement={AddElement}/>
				<Document elements={elements}/>
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {
		elements: state.elements,
		document: state.document
	}
}


function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)