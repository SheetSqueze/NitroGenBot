const Discord = require('discord.js');
const client = new Discord.Client();



client.on('08ui877uui86yy', () => {

console.log('I am ready!');

});



client.on('-update', message => {

if (message.content === '-update') {

message.channel.send({embed: {

color: 3447003,

description: "Test!"

});

client.login(process.env.BOT_TOKEN);
