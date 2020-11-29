const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.qualify = functions.https.onRequest((request, response) => {
  ({ purchasePrice, yearlyIncome, creditScore } = request.body);

  purchasePrice = parseInt(purchasePrice);
  yearlyIncome = parseInt(yearlyIncome);
  creditScore = parseInt(creditScore);

  function qualify() {
    if (purchasePrice > 1000000) {
      response.status(400).send({ msg: 'Purchase Price Too High' });
    }
    if (creditScore > 600 && purchasePrice <= yearlyIncome / 5) {
      response.status(200).send({ qualified: true, msg: 'Congrats! ...' });
    } else {
      response.status(200).send({ qualified: false, msg: 'Sorry ...' });
    }
  }
  response.set('Access-Control-Allow-Origin', '*');
  response.set('Access-Control-Allow-Headers', 'Content-Type');
  response.set('Access-Control-Allow-Methods', 'POST');

  qualify();
});
