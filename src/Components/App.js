import React, { Component } from 'react';

import './App.scss';

import Life from './Life';
import Header from './Header';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Life />
			</div>
		);
	}
}

export default App;
