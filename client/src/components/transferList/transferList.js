import React from 'react';
import './transferList.css';
import Profile from '../profile/profile';

const TransferList = ({ allUsers, userId, handleSend }) => {
    const renderUsers = () => {
      return allUsers.map(user => {
        return <Profile user={user} key={user.id} userId={userId} handleSend={handleSend}/>
      })
    }

  return (
      <div className="friends-list">
        <div className="plusSign">
          <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </div>
        {renderUsers()}
      </div>
  )
}


export default TransferList;