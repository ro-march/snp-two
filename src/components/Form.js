import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { warn, validate, errors } from '../validators/FormValidate';


 //*** tamplate input component for redux-form ***//
const inputComponent = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="Field">
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <p className="error">{error}</p>) || (warning && <p className="error">{warning}</p>))}
  </div>
);


class Form extends Component {

	constructor(props) {
		super(props);

		this.data = {
			name: '',
			count: 1,
			cost: 0
		}
	}


	 //*** event change last element ***//
	onSendChange() {
		this.props.changeElement(this.data.name, this.data.count, this.data.cost);
	}


	 //*** add new element to document ***//
	onAddHandler(e) {
		if ( errors.name || errors.count || errors.cost ) {
			this.props.touch('name', 'count', 'cost');
			return;
		}

		this.props.addElement(this.data.name, this.data.count, this.data.cost);
		this.props.reset();
	}


	 //*** send document to user ***//
	onSendDocument() {
		if ( errors.username || errors.email ) {
			this.props.touch('username', 'email');
			return;
		}

		localStorage.removeItem('state');
		location.reload();
	}


	 //*** change name product ***//
	onChangeNameHandler(e) {
		this.data.name = e.target.value;
		this.onSendChange();
	}


	 //*** change count products ***//
	onChangeCountHandler(e) {
		this.data.count = e.target.value
		this.onSendChange();
	}


	 //*** change cost product ***//
	onChangeCostHandler(e) {
		this.data.cost = e.target.value
		this.onSendChange();
	}


	render() {
		return (
			<div className="form">

				<Field name="name" component={inputComponent} onChange={::this.onChangeNameHandler} type="text" label="Товар"/>
				<Field name="count" component={inputComponent} onChange={::this.onChangeCountHandler} type="number" label="Количество"/>
				<Field name="cost" component={inputComponent} onChange={::this.onChangeCostHandler} type="number" label="Стоимость"/>

				<button onClick={::this.onAddHandler}>Добавить</button>

				<Field name="username" component={inputComponent} type="text" label="Ваше имя"/>
				<Field name="email" component={inputComponent} type="email" label="E-mail"/>
				<button onClick={::this.onSendDocument}>Отправить</button>
			</div>
		);    
	}
}

//*** export ***//
export default reduxForm({ form: 'form', validate, warn })(Form)
