const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "poke",
  category: "fun",
  run: async (client, message, args) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to pat them");
    if (message.mentions.users.first().id === client.user.id) return message.channel.send('<:legend_ultra_lul:734675676220620813>');
    if (message.mentions.users.first().id == message.author.id) return message.reply("Idk if thats possible chief")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke")
    .catch(e => {
      if(e) {
        message.channel.send("Oops, something broke...")
        console.log(e)
      }
    })
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, you got poked by ${message.author.username}`)
    .setImage(body.url) 
    .setFooter(`Bot by - CTK blobby#5340`);
    message.channel.send({embed})
}
}