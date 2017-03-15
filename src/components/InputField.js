import React, { Component } from 'react';

export default class InputField extends Component {

	OnChange(e) {
		if (this.Validate( e.target.value, "[0-9]{3}" )) {
			alert("valid error");
		}
	}

	Validate(text, valid) {
		// ^[A-Z]{2}[0-9]{4}-[0-9]{5}$

		let regex = new RegExp(valid, "i");

		var searchText = text;

		if ((searchText.length > 0) && !regex.test(searchText))
			return false;

		return true;
	}

	render() {
		return (
			<div>
				<label>{this.props.label}</label>
				<input name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} onChange={::this.OnChange}/>
			</div>
		);
	}
}
