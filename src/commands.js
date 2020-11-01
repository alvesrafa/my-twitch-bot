function mensagens(channel, tags, message, self, client) {
  if (self) return;

  if (message.toLowerCase() === '!loja') {
    client.say(
      channel,
      `Acesse a loja e retire recompensas: https://streamelements.com/raufael/store 😎!`
    );
  }
  if (message.toLowerCase() === '!prime') {
    client.say(
      channel,
      `Acesse o site https://gaming.amazon.com/ e entre vincule sua conta da twitch com a que você possui Amazon prime!`
    );
  }
  if (message.toLowerCase() === '!elapartiu') {
    client.say(channel, `@${tags.username}, ELA PARTIU, E AGORA, OQ EU FAÇO??`);
  }
  if (message.toLowerCase() === 'salve') {
    client.say(channel, `@${tags.username}, Salve, como nois tamo?!`);
  }
  if (message.toLowerCase() === 'opa') {
    client.say(channel, `@${tags.username}, salveeee!`);
  }
  if (message.toLowerCase() === '!pontos') {
    client.say(
      channel,
      "Salve! Só de assistir a live você ganha 'bagulhos' (pontos) para utilizar na loja. Você ganha mais pontos ao seguir, fazer doações etc"
    );
  }

  if (message.toLowerCase() === 'prime') {
    client.say(
      channel,
      `Salve @${tags.username}, você já conhece o Amazon Prime, você pode assinar o Amazon Prime e adquirir diversos beneficios como Frete Grats, Prime video e de brinde dar um Sub no canal de sua preferencia! Se for o meu, MUITO OBRIGADO! `
    );
  }
  if (message.toLowerCase() === '!bot') {
    client.say(
      channel,
      `@${tags.username}, EU SOU O MELHOR BOT SE VOCÊ TIVER UMA BELEZA SURREAL, AI É COM VOCÊ...!`
    );
  }
}

module.exports = {
  mensagens,
};
