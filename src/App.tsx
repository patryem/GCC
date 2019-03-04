import * as React from 'react';

import Card from './components/Card/Card';
import CardPlaceHolder from './components/Card/CardPlaceHolder';
import Control from './components/Control/Control';

interface IAppState {
	showCard: boolean;
}

class App extends React.Component<
	{
		/*IAppProps */
	},
	IAppState
> {
	public state = { showCard: false };

	public render() {
		return (
			<div className="App">
				{this.state.showCard ? <Card attack={2} defense={4} /> : <CardPlaceHolder />}
				<Control onClick={this.toggleCard} text="Show Card" />
			</div>
		);
	}

	private toggleCard = () => {
		this.setState((prevState) => {
			return { showCard: !prevState.showCard };
		});
	};
}

export default App;
