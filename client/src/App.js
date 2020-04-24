import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.css";
import CreditCardForm from "./components/creditCardForm/creditCardForm";
import SignUp from "./components/signUp/signUp";
import SignIn from "./components/signIn/signIn";
import Home from "./components/home/home";
import apiClient from "./apiClient";
import Send from './components/send/send';



function App() {
  const [userId, setUserId] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [txHistory, setTxHistory] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
   const userId = getLocalStorage('userId')
   setUserId(userId)

   apiClient.getAll().then(user => {
     setAllUsers(user)
     
  
  });
   
   apiClient.getTxHistory(userId).then(txh => setTxHistory(txh));
   apiClient.getCardInfo(userId).then(card => setCardInfo(card));
  }, []);


  const createUser = inputs => {
    apiClient.postUser(inputs)
    .then(data =>{ 
      //TODO: make it so that the redirection only works when the status of the post request is success.

        setLocalStorage('userId',data.data.id)
        setUserId(data.data.id) 
        setAllUsers([...allUsers, data])
      })
    .catch(err => {
      console.log(err);
    })
  };

  const createCard = inputs => {
    apiClient.postCard(inputs, userId)
    .then(data => {
      apiClient.getCardInfo(userId).then(card => setCardInfo(card));
    })
    .catch(err => {
      console.log(err)
    })
  };

  const transfer = (amount, recipientId) => {
    apiClient.makeTransfer(amount, userId, recipientId)
    .then (data => {
      apiClient.getTxHistory(userId).then(txh => setTxHistory(txh));
      console.log('sent amount', data);
    })
    .catch(error => {
      console.log(error)
    })
  }

  function getLocalStorage(key) {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.log(error);
        return null;
      }  
  }

  const setLocalStorage = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={SignIn} exact/>
          <Route path="/register" render={() => <SignUp createUser={createUser} />}/>
          <Route path="/card" render={() => <CreditCardForm createCard={createCard} userId={userId}/>}/>
          <Route path="/home/:id" render={() => <Home cardInfo={cardInfo} txHistory={txHistory} allUsers={allUsers} userId={userId} transfer={transfer}/>}/>
          <Route path="/send/:id/:id" render={() => <Send allUsers={allUsers} transfer={transfer}/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
