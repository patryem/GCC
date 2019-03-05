import * as React from 'react';

import Card from './components/Card/Card';
import CardPlaceHolder from './components/Card/CardPlaceHolder';
import Control from './components/Control/Control';

interface IAppState {
	showCard: boolean;
	cardBoni: number[];
	cardAttack: number;
	cardDefense: number;
}

// const cardBoni = [ 1.4, 1.6, 1.8, 0.8, 0.7, 0.6 ];

class App extends React.Component<
	{
		/*IAppProps */
	},
	IAppState
> {
	public state = { showCard: false, cardBoni: [], cardAttack: 0, cardDefense: 0 };

	public render() {
		return (
			<div className="App">
				{this.state.showCard ? (
					<Card
						attack={this.state.cardAttack}
						defense={this.state.cardDefense}
						boniArray={this.state.cardBoni}
					/>
				) : (
					<CardPlaceHolder />
				)}
				<Control onClick={this.toggleCard} text="Show Card" />
			</div>
		);
	}

	private createBonusEntry = () => Math.round(Math.random() * 5);

	private createRandomStats = () => {
		this.setState({
			cardAttack: Math.round(Math.random() * 10),
			cardDefense: Math.round(Math.random() * 10)
		});
	};
	private createRandomBoni = () => {
		let newArray: number[] = [];
		if (newArray.length <= 3) {
			if (Math.random() <= 0.8) {
				newArray = [ ...newArray, this.createBonusEntry() ];
				if (Math.random() <= 0.6) {
					newArray = [ ...newArray, this.createBonusEntry() ];
					if (Math.random() <= 0.5) {
						newArray = [ ...newArray, this.createBonusEntry() ];
					}
				}
			}
			this.setState({
				cardBoni: newArray
			});
		}
	};

	private toggleCard = () => {
		this.createRandomBoni();
		this.createRandomStats();
		this.setState((prevState) => {
			return { showCard: !prevState.showCard };
		});
	};
}

export default App;
