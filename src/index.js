const tmi = require('tmi.js');

const commands = require('./commands');
const options = require('./options');

const { mensagens } = commands;

const client = tmi.Client(options);

client.connect();

client.on('message', (channel, tags, message, self) =>
  mensagens(channel, tags, message, self, client)
);
