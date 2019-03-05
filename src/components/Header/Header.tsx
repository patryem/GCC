import * as React from 'react';

import './Header.css';

interface IHeaderProps {
	cash: number;
}

const header = (props: IHeaderProps) => {
	return (
		<header className="Header">
			<div className="Cash">
				{props.cash}
				{' $'}
			</div>
		</header>
	);
};

export default header;
