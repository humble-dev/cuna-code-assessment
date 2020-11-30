const functions = require('firebase-functions');

exports.qualify = functions.https.onRequest((request, response) => {
  ({ purchasePrice, yearlyIncome, creditScore } = request.body);

  purchasePrice = parseInt(purchasePrice);
  yearlyIncome = parseInt(yearlyIncome);
  creditScore = parseInt(creditScore);

  function qualify() {
    if (purchasePrice > 1000000) {
      response
        .status(400)
        .send({ msg: 'Purchase price is greater than 1000000' });
    }
    if (creditScore > 600 && purchasePrice <= yearlyIncome / 5) {
      response.status(200).send({
        qualified: true,
      });
    } else {
      response.status(200).send({
        qualified: false,
        msg:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus placeat laudantium officia, nihil, pariatur eos dolore hic obcaecati eligendi eum, praesentium deserunt doloribus saepe similique accusantium tempore nobis et iusto.',
      });
      console.log({ creditScore, passCredit: creditScore > 600 });
      console.log({
        purchasePrice,
        yearlyIncome,
        passPurchase: purchasePrice <= yearlyIncome / 5,
      });
    }
  }
  response.set('Access-Control-Allow-Origin', '*');
  response.set('Access-Control-Allow-Headers', 'Content-Type');
  response.set('Access-Control-Allow-Methods', 'POST');

  qualify();
});
