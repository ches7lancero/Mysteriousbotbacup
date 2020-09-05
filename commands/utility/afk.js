const Discord = require('discord.js'),
db = require('quick.db');

module.exports = {
  name: "afk",
  category: "utility",
  run: async (client, message, args) => {
const status = new db.table("AFKs");
let afk = await status.fetch(message.author.id);
const embed = new Discord.MessageEmbed().setColor(0xffffff)
    
  if (!afk) {
    embed.setDescription(` <a:redtick:734667231736234024> **${message.author.tag}** now AFK.`)
    embed.setFooter(`Reason: ${args.join(" ") ? args.join(" ") : "AFK"}`)
    status.set(message.author.id, args.join(" ") || `AFK`);
  } else {
    embed.setDescription("You are no longer AFK <a:DL_denied:734667833883099178> ");
    status.delete(message.author.id);
  }
    
  message.channel.send(embed)
  }
}