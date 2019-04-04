import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList/FriendsList';
import Forms from './components/FriendsList/Forms';
//styles//
import './App.css';


class App extends Component {
  constructor() {
  super(); 
    this.state = {
      friends: [],
    }
  }

  //get request

  componentDidMount() {    
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({ friends: response.data}))
    .catch(error => console.log('You done messed up!')
    )};


  //post request
  
  addFriend = friends => {
    console.log('in app- post message');
    axios.post('http://localhost:5000/friends', friends) //base url...address for server...says it wants to send info to end request; server says what data do you have for me to add 'object'
   .then(response => 
    this.setState({ friends: response.data}))
   .catch(error => console.log(error)
   )};




   render() {
    return (
      <div className='container'>
       <h1>Contacts</h1>
       <FriendsList  friends={this.state.friends}/>
        <Forms  addFriend={this.addFriend} />
       
       
      </div>
    );
  }

}
export default App;

