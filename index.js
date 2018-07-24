const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('-commands', {type: 'WATCHING'});
});

client.on('message', message => {
    if (!message.content.startsWith(process.env.PREFIX)) return;
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let runCmd = command.slice(process.env.PREFIX.length);
    if (runCmd === 'hello') return message.channel.send('Hi!');
});

client.login(process.env.BOT_TOKEN);
