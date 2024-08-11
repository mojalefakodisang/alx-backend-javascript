import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  return Promise.all(promises)
    .then((msg) => {
      console.log(`${msg[0].body} ${msg[1].firstName} ${msg[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
