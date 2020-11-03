import tmi from 'tmi.js';

import { mensagens, timer } from './commands';
import options from './options';

const client = tmi.Client(options);

client.connect();

// Verifica as mensagens dos usuarios!
client.on('message', (channel, tags, message, self) =>
  mensagens(channel, tags, message, self, client)
);

// Temporizadores! mandar mensagem de acordo com o tempo
timer(
  options.channels[0],
  client,
  34,
  'Ae meu cria, se tiver aquele trocado pra fortalecer no cafézin do Raufa, só agradece! Manda um "!doar" pra ver as possibilidades'
);

timer(
  options.channels[0],
  client,
  20,
  'Salve rapeize, você ja deixou aquele follow pra fortalecer? Se puder seguir vai ajudar o Raufa demaisss!'
);
timer(
  options.channels[0],
  client,
  20,
  'E se você já segue, ativa as notificações pra ficar ciente sempre que o Raufa ficar on, ai vc pode colar pra trocar uma idéia.'
);

timer(
  options.channels[0],
  client,
  10,
  'Manda ai o comando: "!loja" e resgata uma brincadeira ai! HUEHEUH'
);
timer(
  options.channels[0],
  client,
  11,
  'A cada 10 minutos assistindo você ganha "100 bagulhos" pra poder gastar na !loja. SUB ganha 10x mais!!'
);
