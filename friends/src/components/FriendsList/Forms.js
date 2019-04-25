import React from 'react';
//styles
import {Button, Form, FormGroup, Input, } from 'reactstrap';



class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            friend: {
            name: '',
            age: '',
            email: ''   
            }
         
        }

     const deleteFriend = event => {
            event.preventDefault()
            this.props.deleteFriend(this.state.friend);
        }


    }

  //changeHandler // gets moved to form component
  changeHandler = event => {
      console.log('change handler working');
      event.persist();
      let value = event.target.value;

    this.setState(prevState => ({
        friend: {
            ...prevState.friend,
        [event.target.name]:value
    }
    }))
  
  }

handleSubmit = event => {
    event.preventDefault();
    this.props.addFriend(this.state.friend);

    this.setState({
        friend: {
            name: '',
            age: '',
            email: ''   
            }
    })
}




    render() { 
        return ( 
            <div className='container'>
            <Form className='form' onSubmit={this.handleSubmit}>
            <FormGroup className='name-form'>
             <Input
             type='text'
             placeholder='Name'
             name='name'
             value={this.state.friend.name}
             onChange={this.changeHandler}
             />
             </FormGroup>
        
            <FormGroup className='age-form'>
            <Input
            type='number'
            placeholder='Age'
            name='age'
            value={this.state.friend.age}
            onChange={this.changeHandler}
            />
            </FormGroup>

            <FormGroup className='email-form'>
            <Input
            type='string'
            placeholder='Email'
            name='email'
            value={this.state.friend.email}
            onChange={this.changeHandler}
            />
            </FormGroup>
            <Button outline color='info' size='sm'>Save</Button>
            </Form>
            </div>
         );
    }
}
export default Forms;

