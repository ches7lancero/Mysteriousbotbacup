module.exports = {
  name: "lockdown",
  category: "moderation",
  run: async (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(" <a:DL_denied:734667833883099178> **Error:** You don't have the permission to do that!");

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
      message.channel.send(` <a:redtick:734667231736234024> , **${message.author.username}** just locked the channel `);
    }
}