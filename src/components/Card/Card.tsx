import * as React from 'react';

import './Card.css';

interface ICardProps {
	attack: number;
	defense: number;
	boniArray: number[];
}

const cardBoni = [ '+ Slightly Stronger', '+ High Intelligence', '+ Super Rare', '- Damaged', '- Slow', '- Worthless' ];

const card = (props: ICardProps) => {
	return (
		<div className="Card">
			<div className="PicContainer" />
			<div className="CardInfoContainer">
				<div className="CardInfo">{props.attack} ATK</div>
				<div className="CardInfo">{props.defense} DEF</div>
			</div>
			<div className="BoniContainer">
				{props.boniArray.map((num, index) => (
					<div key={index} className="Bonus">
						{cardBoni[num]}
					</div>
				))}
			</div>
		</div>
	);
};

export default card;
