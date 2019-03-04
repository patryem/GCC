import * as React from 'react';

import './Card.css';

interface ICardProps {
	attack: number;
	defense: number;
}

const card = (props: ICardProps) => {
	return (
		<div className="Card">
			<div className="PicContainer" />
			<div className="CardInfoContainer">
				<div className="CardInfo">{props.attack} ATK</div>
				<div className="CardInfo">{props.defense}3 DEF</div>
			</div>
			<div className="BoniContainer">
				<div className="Bonus"> + Fun</div>
				<div className="Bonus"> - Time</div>
				<div className="Bonus"> - Pain</div>
			</div>
		</div>
	);
};

export default card;
