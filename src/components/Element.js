import React, { Component } from 'react';

export default class Element extends Component {

	render() {
		const { name, count, cost } = this.props;
		return (
			<div className="element">
				<div className="left">{name}</div>
				<div className="oneline">
					<div>x:</div>
					<div>{count}</div>
				</div>
				<div className="right">{cost * count}р</div>
			</div>
		);
	}
}