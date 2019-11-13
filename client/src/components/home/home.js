import React, { useState } from 'react';
import './home.css';
import CardItemCopy from '../cardItemCopy/cardItemcopy';
import TransferList from '../transferList/transferList';
import TxHistory from '../txHistory/txHistory'
import Send from '../send/send';



const Home = ({allUsers, userId, transfer, txHistory, cardInfo}) => {
  console.log(cardInfo? cardInfo: "");
  console.log(txHistory);
  
  const [view, setView] = useState(false)
  const [recipientId, setRecipientId] = useState('');

  const handleSend = (recipient) => {
    setView(true);
    setRecipientId(recipient);
  }

  return (
    <div className="wrapper">
      <div className="topIcon">
        <div className="icon">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
        </div>
        <div className="search">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
      </div>
      <div className="creditCard">
        <CardItemCopy cardInfo={cardInfo} allUsers={allUsers} userId={userId}/>
      </div>
      <TransferList allUsers={allUsers} userId={userId} handleSend={handleSend}/>
      <TxHistory txHistory={txHistory} allUsers={allUsers} userId={userId}/>
      <Send  elevation={0} transfer={transfer} view={view} setOpen={setView} recipientId={recipientId} />
    </div>
    
  );
}

export default Home;