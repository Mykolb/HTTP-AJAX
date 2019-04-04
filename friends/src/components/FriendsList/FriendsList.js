import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import * as Icon from 'react-feather';



const FriendsList = props => {
    return( 
        <div className='list-container'>
        {props.friends.map(friends => 
        {
            return(
                <div className='friend-card' key={friends.card}>
                <Card body inverse color='info'>
                    <CardTitle>
                    <Icon.User className='icons' />
                    {friends.name}</CardTitle>
                    <CardText>
                    <Icon.Info className='icons' />
                    {friends.age}</CardText>
                    <CardText> 
                    <Icon.Mail className='icons' />
                    {friends.email}</CardText>
                    <CardText><strong>ID:</strong> {friends.id}</CardText>
                    </Card>
                </div>
            )
        }
            )}
    </div>
     );
}
 




export default FriendsList;