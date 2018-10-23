import React, { Component } from 'react';
import { View} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };


  componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCdYLpWhdnxL_pjDR0dNQ63M_2C5OSPXx8',
			authDomain: 'udemyauth-e52b4.firebaseapp.com',
			databaseURL: 'https://udemyauth-e52b4.firebaseio.com',
			projectId: 'udemyauth-e52b4',
			storageBucket: 'udemyauth-e52b4.appspot.com',
			messagingSenderId: '476501996252'
		});
    firebase.auth().onAuthStateChanged(( user )=> {
      if ( user ) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch( this.state.loggedIn) {
      case true:
        return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut() }>
            Log Out
          </Button>
        </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  // Render renders the entire screen
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
