import React, { Component } from 'react';
import { Text  } from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPressi() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword( email, password )
      .catch( () => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
          .catch( () => {
             this.setState({ error: 'Authentication Failed.' });
          } );
      });
  }

  render() {

    const { errorTextStyle } = styles;
    return (
      <Card>

        <CardSection>
          <Input
            placeholder="for@our.clients"
            label="Email" 
            value={this.state.email}
            onChangeText={ email => this.setState({ email }) }
          />
 
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={ password => this.setState({ password }) }
          />
        </CardSection>

        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button  onPress={this.onButtonPress.bind(this)} >
            Log in for our clients
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
};

export default LoginForm;
