export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'success' });
    } else {
      const error = 'The fake API is not working currently';
      reject(error);
    }
  });
  return promise;
}
