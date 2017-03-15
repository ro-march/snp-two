import React, { Component } from 'react'
import Element from './Element'


export default class Document extends Component {

	render() {

		const { elements } = this.props;
		const listElements = elements.map((element, id) => {

			if (element.name.length > 0)
		 		return <Element key={id} name={element.name} count={element.count} cost={element.cost} />
		}
		);

		let sum = 0;
		for (let i = 0; i < elements.length; i++)
			sum += elements[i].cost * elements[i].count;


		return (
			<div className="document">
				<div className="left">OOO "Барсук и Co"</div>
				<div>НМ 00001595</div>
				<div>ИНН: 007820305689</div>
				<div>15.03.2017 10:30</div>
				<div>N 2076/0214</div>
				<div className="line"></div>
				 {listElements}
				<div className="line"></div>
				<div className="oneline">
					<div className="left">ИТОГО:</div>
					<div className="right">{sum}р</div>
				</div>
				<div className="left">КАССИР /1</div>
				<div className="right">*РНМ 000220003045*</div>
				<div className="right">ЭКЛЗ 05623565435</div>
				<div className="right">00339976 #004027</div>
			</div>
		);
	}
}