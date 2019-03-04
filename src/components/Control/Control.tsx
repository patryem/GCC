import * as React from 'react';

import './Control.css';

interface IControlOutputProps {
	text: string;
	onClick: any;
}

const control = (props: IControlOutputProps) => (
	<div className="Control" onClick={props.onClick}>
		{props.text}
	</div>
);

export default control;
