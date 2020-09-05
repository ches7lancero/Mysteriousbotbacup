const Discord = require('discord.js');

module.exports = {
  name: "dogla",
  category: "Special",
  run: async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .addField('List Of Official Doglas')
   .addField('1. Naveen <a:redtick:734667231736234024>')
   .addField('2. Ramdev <a:redtick:734667231736234024>')
   .addField('3. LEGEND <a:redtick:734667231736234024>')
  .setFooter(`Bot by the - CTK blobby#5340`);
  message.channel.send({embed});
    
    }
}