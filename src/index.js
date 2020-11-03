import tmi from 'tmi.js';

import { mensagens } from './commands';
import options from './options';

const client = tmi.Client(options);

client.connect();

client.on('message', (channel, tags, message, self) =>
  mensagens(channel, tags, message, self, client)
);
