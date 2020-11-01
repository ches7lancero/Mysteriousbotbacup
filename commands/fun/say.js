const { MessageFlags, DiscordAPIError } = require("discord.js");

module.exports = {
 name: "say",
 desciption: "say command",

 async run (client, message, args) {

 


 let msg;
 let textChannel = message.mentions.channels.first()
 message.delete()

 if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');

 if(textChannel) {
 msg = args.slice(1).join(" ");
 textChannel.send(msg)
 } else {
 msg = args.join(" ");
 message.channel.send(msg)
 }
 }
}
