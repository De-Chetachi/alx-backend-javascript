export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      throw new Error('The fake API is not working currently');
      // reject(error);
    }
  });
  return promise;
}
