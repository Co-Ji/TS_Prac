import React from 'react';
import './App.css';
import Prac from './Prac';
import PrPrac from './PrPrac';
import PracType from './PracType';

const App = () => {
	const banana = {
		color: 'yellow',
		taste: 'sweet',
	};

	return (
		<div>
			<PracType />
			<Prac />
			<PrPrac />
		</div>
	);
};

export default App;
