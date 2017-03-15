import React, { Component } from 'react';
import InputField from '../components/InputField'

export default class Form extends Component {

	constructor() {
		super();
		this.data = {
			name: '',
			count: 1,
			cost: 0.0
		}
	}

	onSendChange() {
		this.props.changeElement(this.data.name, this.data.count, this.data.cost);
	}

	onAddHandler(e) {
		this.props.addElement(this.data.name, this.data.count, this.data.cost);
		this.data.name = '';
		this.data.cost = 0;
		this.data.count = 1;
	}

	onSendHandler(e) {
	}

	onChangeNameHandler(e) {
		this.data.name = e.target.value;
		this.onSendChange();

	}

	onChangeCountHandler(e) {
		this.data.count = e.target.value
		this.onSendChange();

	}

	onChangeCostHandler(e) {
		this.data.cost = e.target.value
		this.onSendChange();
	}


	render() {
		return (
			<form className="form">
				<label>Название:</label>
				<input type="text" value={this.data.name} onChange={::this.onChangeNameHandler} />

				<InputField name="name" label="Hi" placeholder="lolol" />

				<label>Цена:</label>
				<input type="text" value={this.data.cost} pattern={'[0-9]{3}'} min="0" onChange={::this.onChangeCostHandler} />

				<label>Количество:</label>
				<input type="number" name="count" pattern="[0-9]{3}" value={this.data.count} min="1" onChange={::this.onChangeCountHandler} />
				<button onClick={::this.onAddHandler}>Добавить</button>


				<label>Имя:</label>
				<input type="text" name="username"/>

				<label>E-Mail:</label>
				<input type="email" name="email"/>
				<button>Отправить чек</button>
			</form>
		);
	}
}