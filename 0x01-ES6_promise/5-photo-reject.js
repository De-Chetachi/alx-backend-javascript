export default function uploadPhoto(filename) {
  return new Promise((Null, reject) => {
    reject(Error(`${filename} cannot be processed`));
  });
}
