import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((responses) => {
      for (const response of responses) {
        if (response.status === 'rejected') {
          response.value = `Error: ${response.reason.message}`;
          delete response.reason;
        }
      }
      return responses;
    });
}
