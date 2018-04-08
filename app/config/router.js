import React from 'react';
import {StackNavigator} from 'react-navigation';

import MainPage from '../screens/MainPage';
import SecondPage from '../screens/SecondPage';


export const FeedStack = StackNavigator({
  MainPage: {
    screen: MainPage,
    navigationOptions: {
      title: 'SmartNotes',
    }
  },
  SecondPage: {
  	screen: SecondPage,
  	navigationOptions: {
  		title: 'Save and Upload'
  	}
  	
  }
});
