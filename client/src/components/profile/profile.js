import React, { useState } from 'react';
import './profile.css'


const Profile = ({ user, userId, handleSend }) => {
 

  const handleClick = (e) => {
    let recipientId = user.id;
    handleSend(recipientId);
  }

  return (
    <div className="user" onClick={handleClick}>
      <div className="bgImg"></div>
      <p>{user.firstName}</p>
    </div>
  )
}

export default Profile;