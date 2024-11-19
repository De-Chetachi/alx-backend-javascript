#!/usr/bin/env node

function getPaymentTokenFromApi(success) {
  if (success) {
    return (new Promise((resolve) => {
      resolve({ data: 'Successful response from the API' });
    }));
  }
};

module.exports = getPaymentTokenFromApi;
