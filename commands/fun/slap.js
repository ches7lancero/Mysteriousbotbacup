const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "slap",
  category: "fun",
  run: async (client, message, args) => {
    if (!message.mentions.users.first()) return message.reply(" <a:DL_denied:734667833883099178> You need to mention someone to slap them");
    if(message.mentions.users.first().id === "384564067442098178") return message.reply('You can\'t hurt him .');
    if (message.mentions.users.first().id == client.user.id && message.author.id === "384564067442098178"){
      const { body } = await superagent
      .get("https://nekos.life/api/v2/img/slap");
      
      const embed = new Discord.MessageEmbed()
      .setColor("#ff9900")
      .setTitle(`No u! *slaps*${message.mentions.users.first().username}`)
      .setImage(body.url) 
      .setFooter(`Bot by - LΞGΞND OP#8691`);
      return message.channel.send({embed})
    }else if (message.mentions.users.first().id == client.user.id && message.author.id !== "384564067442098178"){
      return message.channel.send("NOOOOOOOO")
    }
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.mentions.users.first().username} You got slapped by ${message.author.username}`)
    .setImage(body.url) 
    .setFooter(`Bot by - CTK blobby#5340`);
    message.channel.send({embed})
  }
}