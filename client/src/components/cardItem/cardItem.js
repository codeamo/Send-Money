import React, { useState, useEffect } from "react";
import "./cardItem.css";

const CardItem = props => {
  const [card, setCard] = useState({
    isFocused: false
  });
  let number = props.cardInput.cardNumber;
  const name = props.cardInput.cardName;
  const month = props.cardInput.month;
  const year = props.cardInput.year;
  const cvv = props.cardInput.cvv;

  let star = "**** **** **** ****";

  const toArray = n => {
    return n.split("");
  };

  const generateMonthValue = n => {
    return n < 10 ? `0${n}` : n;
  };

  const generateYearValue = n => {
    return n.slice(-2);
  };

  const maskCardNumber = () => {
    let arr = number.split("");
    arr.forEach((element, index) => {
      if (index > 4 && index < 14 && element.trim() !== "") {
        arr[index] = "*";
      }
      // number = arr.join('');
    });
  };

  // function clearNumber(value = '') {
  //   return value.replace(/\D+/g, '')
  // }

  // function formatCreditCardNumber(value) {
  //   if (!value) {
  //     return value
  //   }

  //   const clearValue = clearNumber(value)
  //   let nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
  //     4,
  //     8
  //   )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`

  //   return nextValue.trim()
  //   }

  // let changeNumber = (value) => {
  //   if ((/^\d{0,16}$/).test(value)) { // regular cc number, 16 digits
  //     number = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
  //   }
  // }
  const arrayOf16 = new Array(16).fill(null);
  console.log(arrayOf16);

  function changeNumber(value, str) {
    console.log("star", str);
    let regex = /\*{1}/;
    let newStr = str.replace(regex, value);
    console.log("afterRegex", newStr);
    star = newStr;
    console.log("oldstar", star);
  }

  return (
    <div className="card-list">
      <div className={`card-item active ${props.isFocused && "rotate"}`}>
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
                <div className="numberItem" value={number}>
                  {arrayOf16.map((_, i) => (
                    <span>{ number && 
                      String(number)[i] ? String(number)[i] : "*"}</span>
                  ))}
                </div>
              </span>
            </label>
            <div className="content">
              <label className="card-item-info">
                <div className="card-holder">Card Holder</div>
                <div className="card-name" value={name}>
                  {name || "Full Name"}
                </div>
              </label>
              <div className="card-item-date">
                <label for="cardMonth" className="dateTitle">
                  Expires
                </label>
                <label for="cardMonth" className="dateItem">
                  <span value={month}>
                    {generateMonthValue(month) || "MM"}{" "}
                  </span>
                </label>
                /
                <label for="cardYear" className="dateItem">
                  <span value={year}>
                    {" "}
                    {(year && generateYearValue(year)) || "YY"}{" "}
                  </span>
                </label>
              </div>
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
            <div className="cvvBand" value={cvv}>
              {cvv}
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

export default CardItem;
