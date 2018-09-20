import React from 'react';
import PropTypes from 'prop-types';

import Friend from './friend';

const FriendsList = (props) => {
    return (
        props.gettingFriends ? 
            <p>Getting Friends. Please wait...</p> 
        : 
            <div>
                {props.friends.map( (friend) => <Friend friend={friend} key={friend.id} /> )}
            </div>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    })).isRequired,
    gettingFriends: PropTypes.bool.isRequired
};

export default FriendsList;