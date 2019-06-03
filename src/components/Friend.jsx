import React from 'react';
import pt from 'prop-types';

export default function Friend({ friend, deleteFriend, markAsEnemy, setFriendToBeEdited }) {
  const onEdit = event => {
    // One liner. Implement using setFriendToBeEdited
    setFriendToBeEdited(friend.id);
  };

  const onDelete = event => {
    // One liner. Implement using deleteFriend
    deleteFriend(friend.id);
  };

  const onMarkEnemy = event => {
    // One liner. Implement using markAsEnemy
    markAsEnemy(friend.id);
  };

  const friendStyle = {
    color: friend.friendly ? 'green' : 'red',
  };

  return (
    <div>
      <span style={friendStyle}>{friend.name} is {friend.age}</span>

      <button onClick={onEdit} className='small'>Edit</button>
      <button onClick={onDelete} className='small danger'>Delete</button>
      <button onClick={onMarkEnemy} className='small alert'>Mark as Enemy</button>
    </div>
  );
}

// const defaultCallback = () => console.log('you clicked something!');

Friend.propTypes = {

  friend: pt.shape({
    id: pt.string.isRequired,
    name: pt.string.isRequired,
    age: pt.string.isRequired,
    friendly: pt.bool.isRequired,
  }).isRequired,

  deleteFriend: pt.func.isRequired,
  markAsEnemy: pt.func.isRequired,
  setFriendToBeEdited: pt.func.isRequired,
  bold: pt.bool,
};

Friend.defaultProps = {
  bold: false,
};

// USE PROP TYPES ALL OVER!!! all components, all props
// ALWAYS MAKE REQUIRED, if they are crucial
// YOu can make non-required, for non-crucial stuff (bold), PROVIDE DEFAULT