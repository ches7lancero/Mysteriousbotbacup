const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

module.exports = {
  name: "clearwarns",
  category: "moderation",
  run: async (client, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first();
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("<a:DL_denied:734667833883099178> **Error:** You don't have the **Kick Members** permission!");
    if(message.mentions.users.size < 1) return message.reply(' <a:DL_denied:734667833883099178> You must mention someone to clear their warns.').catch(console.error);
    if(!user) return message.reply("Couldn't find that user...");
    if(!warns[`${user.id}, ${message.guild.id}`]){
    warns[`${user.id}, ${message.guild.id}`] = {
        warns: 0
    };
}
    let reason = `${warns[`${user.id}, ${message.guild.id}`].warns} warnings have been cleared for this person <a:redtick:734667231736234024> `;
    if(warns[`${user.id}, ${message.guild.id}`].warns > 0) {
        warns[`${user.id}, ${message.guild.id}`] = {
        warns: 0
    };
    }else{
        reason = '<a:DL_denied:734667833883099178> This user doesn\'t have any warnings'
    };

    fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
        if(err) throw err;
      });

    const embed = new Discord.MessageEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Action:', 'Clear Warns', true)
    .addField('User:', `${user.username}#${user.discriminator}`, true)
    .addField('Result:',reason, true)
    .setFooter(`Bot by - LΞGΞND OP#8691`);
    message.channel.send({embed});
    }
}