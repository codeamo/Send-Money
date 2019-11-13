import React, { useState } from 'react';
import './history.css'
const moment = require('moment');

const History = ({ user, userId }) => {

  const checkSender = () => {
    if(parseInt(user.senderId) === userId) {
      return 'Sent'
    } else {
      return 'Received'
    }
  }

  return (
    <div className="history">
      <div className="left">
      <div className="name">{checkSender()}</div>
      <div className="date">{moment(user.createdAt).format("YYYY-MM-DD")}</div>
      </div>
      <p className="amount">{`$ ${user.TransactionAmount}`}</p>
    </div>
  )
}


export default History;