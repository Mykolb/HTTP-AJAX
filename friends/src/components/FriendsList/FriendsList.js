import React from 'react';


const FriendsList = (props) => {
    return ( 
        <div className='list-container'>
        {props.friends.map(friends => 
           <FriendsList friends={friends} />
            )}
    </div>
     );
}
 



export default FriendsList;