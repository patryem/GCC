import * as React from 'react';

import Card from './components/Card/Card';
import CardPlaceHolder from './components/Card/CardPlaceHolder';
import Control from './components/Control/Control';
import Header from './components/Header/Header';

import './components/Control/Control.css';

interface IAppState {
	showCard: boolean;
	cardBoni: number[];
	cardAttack: number;
	cardDefense: number;
	cash: number;
	cardValue: number;
	multiplier: number;
}

class App extends React.Component<
	{
		/*IAppProps */
	},
	IAppState
> {
	public state = {
		cardAttack: 0,
		cardBoni: [],
		cardDefense: 0,
		cardValue: 0,
		cash: 10,
		multiplier: 1,
		showCard: false
	};

	public render() {
		return (
			<div className="App">
				<Header cash={this.state.cash} cardValue={this.state.cardValue} />
				{this.state.showCard ? (
					<Card
						attack={this.state.cardAttack}
						defense={this.state.cardDefense}
						boniArray={this.state.cardBoni}
					/>
				) : (
					<CardPlaceHolder />
				)}
				<div className="ControlContainer">
					<Control onClick={this.createCard} text="Create new card" />
					<Control onClick={this.sellCard} text="Sell card" />
				</div>
			</div>
		);
	}

	private createBonusEntry = () => Math.round(Math.random() * 5);

	private createCardState = () => {
		const cardAttack = Math.round(Math.random() * 10);
		const cardDefense = Math.round(Math.random() * 10);

		// [ '+ Slightly Stronger', '+ High Intelligence', '+ Super Rare', '- Damaged', '- Slow', '- Worthless' ]
		const boni = [ 1.4, 1.6, 1.8, 0.8, 0.7, 0.6 ];
		let newMultiplier: number = 1;
		let newArray: number[] = [];
		if (Math.random() <= 0.8) {
			const bonusOne = this.createBonusEntry();
			newMultiplier = newMultiplier * boni[bonusOne];
			newArray = [ ...newArray, bonusOne ];
			if (Math.random() <= 0.6) {
				const bonusTwo = this.createBonusEntry();
				newMultiplier = newMultiplier * boni[bonusTwo];
				newArray = [ ...newArray, bonusTwo ];
				if (Math.random() <= 0.5) {
					const bonusThree = this.createBonusEntry();
					newMultiplier = newMultiplier * boni[bonusThree];
					newArray = [ ...newArray, bonusThree ];
				}
			}
		}

		const newValue: number = (cardAttack + cardDefense) * newMultiplier;

		this.setState({
			cardAttack,
			cardBoni: newArray,
			cardDefense,
			cardValue: newValue,
			multiplier: newMultiplier
		});
	};

	private createCard = () => {
		this.createCardState();

		this.setState((prevState) => {
			return { showCard: true };
		});
	};

	private sellCard = () => {
		this.setState((prevState) => {
			return {
				cardValue: 0,
				cash: prevState.cash + prevState.cardValue,
				showCard: false
			};
		});
	};
}

export default App;
