import React, { useState } from 'react';
import './txHistory.css';
import History from '../history/history';

const TxHistory = ({ txHistory, userId }) => {
  const [user, setUser] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  const renderUsers = () => {
    return txHistory.map(user => {
      return <History user={user} key={user.id} userId={userId} /> 
    })
  }

  return (
      <div className="rectangle">
        <div className="speaker" onClick={toggleDrawer}></div>
        <div className="footerTitle">
          <p>History</p>
          <svg className="pie" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
        </div>
        {/* transaction history will be here */}
        {renderUsers()}
      </div>
  )
}


export default TxHistory;