import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList/FriendsList';
//styles//
import './App.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class App extends React.Component {
  constructor() {
  super(); 
    this.state = {
      friends: []
    }
  }

  componentDidMount() {    
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({ friends: response.data}))
    .catch(error => console.log('You done messed up!'))
  }
  

   render() {
    return (
      <div className="App">
       <h1>Header Here</h1>
       <FriendsList  />

       <Form className='friend-form'>
       <FormGroup className='name-form'>
        <Input
        type='text'
        placeholder='Name'
        name='name'
        value=''
        onChange=''
        />
        </FormGroup>

        <FormGroup className='age-form'>
        <Input
        type='text'
        placeholder='Age'
        name='Age'
        value=''
        onChange=''
        />
        </FormGroup>

        <FormGroup className='email-form'>
        <Input
        type='text'
        placeholder='Email'
        name='email'
        value=''
        onChange=''
        />
        </FormGroup>
       </Form>
      </div>
    );
  }
}

export default App;

