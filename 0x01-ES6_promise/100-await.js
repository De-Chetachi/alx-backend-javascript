import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  const info = await Promise.allSettled(([uploadPhoto(), createUser()]))
    .then((responses) => responses);
  for (const data of info) {
    if (data.status === 'rejected') {
      return { photo: null, user: null };
    }
  }
  return { photo, user };
}
