import React, { Component } from 'react';
import { View} from 'react-native';
//import firebase from 'firebase';
import { Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {



  /*componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCdYLpWhdnxL_pjDR0dNQ63M_2C5OSPXx8',
			authDomain: 'udemyauth-e52b4.firebaseapp.com',
			databaseURL: 'https://udemyauth-e52b4.firebaseio.com',
			projectId: 'udemyauth-e52b4',
			storageBucket: 'udemyauth-e52b4.appspot.com',
			messagingSenderId: '476501996252'
		});
  }*/

  // Render renders the entire screen
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
