import { AppRegistry } from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

import MainPage from './MainPage';
import SecondPage from './SecondPage'

const App = () => {
	return (
		<Router>
			<Scene key="root">

				<Scene
					key="mainpage"
					component={MainPage}
					title="MainPage"
					initial
				/>
				<Scene
					key="secondpage"
					component={SecondPage}
					title="SecondPage"
				/>
			</Scene>
		</Router>
	);
}

//AppRegistry.registerComponent('SmartNotes', () => MainPage);
