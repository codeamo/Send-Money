import React, { useState, useEffect } from "react";
import "./cardItemcopy.css";

        {/* <CardItemCopy cardInfo={cardInfo} allUsers={allUsers} userId={userId}/> */}
const CardItemCopy = ({ userId, allUsers, cardInfo }) => {
  const users = allUsers.find(user => userId===user.id)
  const card = cardInfo 
  console.log(cardInfo);


  return (
    <div className="card-list">
      <div className={`card-item active`}>
        <div className="card-item-side front">
          <div className="card-item-focus"></div>
          <div className="card-item-cover">
            <img
              src="https://raw.githubusercontent.com/muhammederdem/vue-interactive-paycard/master/src/assets/images/13.jpeg"
              className="bg-img"
              alt="just a background"
            />
          </div>
          <div className="card-item-wrapper">
            <div className="card-item-top">
              <img
                src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                className="card-item-chip"
                alt="credit card chip"
              />
              <div className="card-item-type">
                <img
                  src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                  className="card-item-typeImg"
                  alt="credit card type"
                />
              </div>
            </div>
            <label className="card-item-number">
              <span>
                <div className="numberItem">
                {card? card.cardNumber: ""}
                </div>
              </span>
            </label>
            <div className="content">
              <label className="card-item-info">
                <div className="card-holder">Card Holder</div>
                <div className="card-name">
                  {users?`${users.firstName} ${users.lastName}`:
                  ''}
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="card-item-side back">
          <div className="card-item-cover">
            <img
              src="https://raw.githubusercontent.com/muhammederdem/vue-interactive-paycard/master/src/assets/images/13.jpeg"
              className="bg-img"
              alt="just a background"
            />
            {/* ::after */}
          </div>
          <div className="card-item-band"></div>
          <div className="card-item-cvv">
            <div className="cvvTitle">CVV</div>
            <div className="cvvBand" >
              {"cvv"}
            </div>
            <div className="card-item-type">
              <img
                src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                className="card-item-typeImg"
                alt="credit card type"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemCopy;
