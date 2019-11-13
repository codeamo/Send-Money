const BASE_URL = `http://localhost:3002`;

export default {
  postCard(inputs, userId) {
    return fetchRequest(`/register/${userId}/card`, { 
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(inputs, userId),
    });
  },
  postUser(inputs) {
    return fetchRequest(`/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(inputs),
    });
  },
  getAll() {
    return fetchRequest(`/users`);
  }, 
  getCardInfo(userId) {
    return fetchRequest(`/cardInfo/${userId}`);
  },
  getTxHistory(userId) {
    return fetchRequest(`/txHistory/${userId}`);
  }, 
  makeTransfer(amount, userId, recipientId) {
    console.log('before post', amount, userId, recipientId)
    return fetchRequest(`/send/${userId}/${recipientId}`, { //'/send/:senderId/:recipientId'
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({TransactionAmount: amount}),
    });
  }
}

const fetchRequest = (url, option) => {
  return fetch(`${BASE_URL}${url}`, option)
  .then (res => res.status <= 404 ? res : Promise.reject(res))
  .then (res => res.json() )
  .catch (error => {
    console.log(`${error.message} while fetching ${url}`);  
  })
}