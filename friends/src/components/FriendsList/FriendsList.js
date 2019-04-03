import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import * as Icon from 'react-feather';



const FriendsList = props => {
    return( 
        <div className='list-container'>
        {props.friends.map(friends => 
        {
            return(
                <div className='friend-card'>
                <Card body inverse color='info'>
                    <CardTitle>
                    <Icon.User className='userIcon' />
                    {friends.name}</CardTitle>
                    <CardText>
                    <Icon.Info className='infoIcon' />
                    {friends.age}</CardText>
                    <CardText> 
                    <Icon.Mail className='mailIcon' />
                    {friends.email}</CardText>
                    <CardText>ID: {friends.id}</CardText>
                    </Card>
                </div>
            )
        }
            )}
    </div>
     );
}
 



export default FriendsList;