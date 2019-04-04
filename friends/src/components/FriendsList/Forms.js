import React from 'react';


//styles
import {Button, Form, FormGroup, Input, } from 'reactstrap';




class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            newName: '',
            newAge: '',
            newEmail: ''
        }
    }

  //changeHandler // gets moved to form component
  changeHandler = event => {
    this.setState({
        friend: {
        [event.target.name]: event.target.value
    }   
})
  }

handleSubmit = event => {
    event.preventDefault();
    let newFriend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
    }
    this.props.addFriend(newFriend);
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
             value={this.state.name}
             onChange={this.changeHandler}
             />
             </FormGroup>
        
            <FormGroup className='age-form'>
            <Input
            type='number'
            placeholder='Age'
            name='Age'
            value={this.state.age}
            onChange={this.changeHandler}
            />
            </FormGroup>

            <FormGroup className='email-form'>
            <Input
            type='string'
            placeholder='Email'
            name='email'
            value={this.state.email}
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