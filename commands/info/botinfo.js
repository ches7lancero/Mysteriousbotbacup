const Discord = require("discord.js");
const moment = require("moment");
const client = new Discord.Client({
  disableEveryone: true // what does this disable thing do?
});

module.exports = {
  name: "botinfo",
  category: "Info",
  aliases: ["botinfo"],
  description: "Get info about this bot.",
  usage: "botinfo ",
  run: async (bot, message, args) => {
    message.delete({ timeout: 3000 });
    let embed = new Discord.MessageEmbed()
      .setColor("0xED0B0B")
      .setDescription(
        "🚫 ***oops! it seems you do not have the required permissons...***"
      );
    if (!message.member.hasPermission(["MANAGE_GUILD"]))
      return message.channel
        .send(embed)
        .then(msg => msg.delete({ timeout: 5000 }));

    let boticon = bot.user.displayAvatarURL();
    let botembed = new Discord.MessageEmbed()
      .setTitle("***Bot Information***")
      .setColor("RANDOM")
      .setThumbnail(boticon)
      .addField(
        "**Bot Name**:",
        `${bot.user.username}#${bot.user.discriminator}`
      )
      .addField("**Creator**:", "CTK blobby#5340")
      .addField(
        "**Bot Create Date**:",
        `${moment.utc(bot.user.createdAt).format("DD/MM/YYYY - HH:mm:ss")}`
      )
      .addField("**Bot ID**:", 703171965694902335, true)
      .addField("**Bot Default Prefix**:", `!`)
      .addField("**Servers Count**:", `${bot.guilds.cache.size}`)
      .addField("**Users Count**:", `${bot.users.cache.size}`, true)
      .addField("**Version**:", "1.0.85")
      .setFooter(`Requested By: ${message.author.tag}`);

    message.channel.send(botembed).then(m => m.delete({ timeout: 60000 }));
  }
};
