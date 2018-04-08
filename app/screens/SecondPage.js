import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
//const Speech = require('@google-cloud/speech');


import t from 'tcomb-form-native';

const Form = t.form.Form;


const Input = t.struct({
  filename: t.String
})



function uploadFile(filePath) {
  

  Alert.alert(filePath)

}


export default class SecondPage extends Component {



  export = () => {
    const inputPath = this._form.getValue();
    Alert.alert("Audio File has been uploaded!");
  }

  render() {
      const { audioFilePath } = this.props.navigation.state.params;

      return (
          <View style={styles.container}>
            <Form 
              ref={c => this._form = c}
              type={Input} 
            /> 
            <Button
              title="Save and Export"
              onPress={this.export}
            />
          </View>        
      );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('SecondPage', () => SecondPage);