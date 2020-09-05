const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

module.exports = {
  name: "rename",
  category: "utility",
  run: async (client, message, args) => {
  let newname = args.slice(1).join(' ');
  let user;
  let mention = message.mentions.users.first();
  if (!mention){
    user = message.guilds.members.get(args[0])
    if (!user) return message.reply('You must Tag someone or give me a Valid userID for me to rename them.').catch(console.error);
  }else{
    user = message.guild.member(mention)
  }
  if (user.id === "384564067442098178" && message.author.id !== "384564067442098178") return message.reply("You can't rename my Developer:wink:");
  user.setNickname(newname).catch(e => {
    if(e) return message.channel.send(`An error occured: \`\`\`${e}\`\`\``)
  });
  message.channel.send(" <a:redtick:734667231736234024> Done.");
}
}