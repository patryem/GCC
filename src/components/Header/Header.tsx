import * as React from 'react';

import './Header.css';

interface IHeaderProps {
	cash: number;
	cardValue: number;
}

const header = (props: IHeaderProps) => {
	return (
		<header className="Header">
			<div className="Cash">
				{props.cash.toFixed(2)}
				{' $'}
			</div>
			<div className="CardValue">
				{props.cardValue.toFixed(2)}
				{' $'}
			</div>
		</header>
	);
};

export default header;
