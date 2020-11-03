import { auth } from './auth';
export default {
  channels: ['raufael'],
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: 'raufabot',
    password: auth,
  },
};
