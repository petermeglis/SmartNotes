import React, { Component } from 'react';

import {FeedStack} from './config/router';

import MainPage from './screens/MainPage';
import SecondPage from './screens/SecondPage'

class App extends Component {

	render() {
		console.disableYellowBox = true;
		return <FeedStack />;
	}
}

export default App;