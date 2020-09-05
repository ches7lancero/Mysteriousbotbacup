module.exports = {
  name: "unmute",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        " <a:DL_denied:734667833883099178> Sorry but you do not have permission to unmute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(" <a:DL_denied:734667833883099178> I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        " <a:DL_denied:734667833883099178> Please mention the member to who you want to unmute"
      );
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send(" <a:DL_denied:734667833883099178> Given User do not have mute role so what i am suppose to take")
    }
    
    
    user.roles.remove(muterole)
    
    await message.channel.send(` <a:redtick:734667231736234024> **${message.mentions.users.first().username}** is unmuted`)
    
    user.send(` <a:redtick:734667231736234024> You are now unmuted from **${message.guild.name}**`)

  }
};