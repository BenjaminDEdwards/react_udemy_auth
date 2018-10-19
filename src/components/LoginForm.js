import React, { Component } from 'react';
import {Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { email: '', password: '', };
  render() {
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

        <CardSection>
          <Button>
            Log in for our clients
          </Button>
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
