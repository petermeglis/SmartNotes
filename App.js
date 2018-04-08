/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,

} from 'react-native';



// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
      


     
//         <Text style ={styles.show}>
//           Record
//         </Text>

//         <TouchableHighlight style={styles.button}>
//         <Text style ={styles.buttontext}>
//           Start/Stop
//         </Text>
//         </TouchableHighlight>





//       </View>



//     );
//   }


// }

class HomeScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>

       <Text style ={styles.show}>
          Record
        </Text>

         <Button 
          title="Start/Stop"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <Button 
          title="goo"
          onPress={() => this.props.navigation.navigate('Record')}
        />



      </View>








      
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}







const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },

    Record: {

      screen: RecordScreen,
    },
  },
  {
    initialRouteName: 'Home',
  

  }
);



export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },


  show: {
    textAlign: 'center',
    fontSize:22,
    color: 'red',
    marginBottom: 5,
  },

button: {
    height: 48,
    width:120,
    backgroundColor: 'grey',
  },

  buttontext: {
    height:23,
    color: 'black',
    alignSelf:'center',
    fontSize:22,
    margin: 10,
  },


});
