const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

module.exports = {
  name: "warns",
  category: "moderation",
  run: async (client, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply(' <a:DL_denied:734667833883099178> You must mention someone to check their warns.').catch(console.error);
    if(!user) return message.reply(" <a:DL_denied:734667833883099178> Couldn't find that user...");
    if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };

    const embed = new Discord.MessageEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Action:', 'Warn Check')
    .addField('User:', `${user.username}#${user.discriminator}`)
    .addField('Number of warnings:', warns[`${user.id}, ${message.guild.id}`].warns)
    .setFooter(`Bot by - LΞGΞND OP#8691`);
    message.channel.send({embed});
    }
}
