import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto().then((value) => value.body)
    .then((value) => {
      createUser().then((user) => {
        console.log(value, user.firstName, user.lastName);
      });
    }).catch(() => console.log(Error('Signup system offline')));
}
