const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

module.exports = {
  name: "warn",
  category: "moderation",
  run: async (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  //let logchannel = message.guild.channels.cache.find(x => x.name = 'logs');
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("<a:DL_denied:734667833883099178> **Error:** You don't have the **Kick Members** permission!");
  if (message.mentions.users.size < 1) return message.reply(' <a:DL_denied:734667833883099178> You must mention someone to warn them.').catch(console.error);
  if (message.mentions.users.first().id === message.author.id) return message.reply('<a:DL_denied:734667833883099178> I can\' let you do that, self-harm is bad');
  if (message.mentions.users.first().id === "242263403001937920") return message.reply("<a:DL_denied:734667833883099178> You can't warn my Developer");
  //if (!logchannel) return message.channel.send('I cannot find a logs channel');
  if (reason.length < 1) reason = 'No reason supplied.';
  
  if(!warns[`${user.id}, ${message.guild.id}`]) warns[`${user.id}, ${message.guild.id}`] = {
    warns: 0
  };

  warns[`${user.id}, ${message.guild.id}`].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
    if(err) throw err;
  });

  const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Warned by:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Number of warnings:', warns[`${user.id}, ${message.guild.id}`].warns)
  .addField('Reason', reason)
  .setFooter(`Bot by - CTK blobby#5340`);
  let logchannel = message.guild.channels.cache.find(x => x.name = 'logs');
 message.channel.send({embed})

    }
}