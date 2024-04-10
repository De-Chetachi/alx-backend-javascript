/* eslint-disable no-unused-vars */
/* eslint-disable */
import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default async function handleProfileSignup(firstName, lastName, fileName)  {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

    const res =  [
      {
        status: userResult.status,
        value: userResult.status === 'fulfilled' ? userResult.value : `${userResult.reason}`,
      },
      {
        status: photoResult.status,
        value: photoResult.status === 'fulfilled' ? photoResult.value : `${photoResult.reason}`,
      },
    ];
    console.log(res);
    return res;
  } catch (error) {
    const cat = [
      {
        status: 'rejected',
        value: `Error: ${error.message}`,
      },
    ];
    console.log(cat);
    return cat;
  }
}
