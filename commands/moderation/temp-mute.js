const Discord = require("discord.js");
const ms = require("ms");
const { red_light } = require("../../colours.json");

module.exports = {
  name: "temp-mute",
  category: "moderation",
  run: async (client, message, args) => {
    let tomute = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if(!tomute) return message.reply(" <a:DL_denied:734667833883099178> Couldn't find that user.");
    if(message.author.id === message.mentions.users.first()) return message.reply(" <a:DL_denied:734667833883099178> You can't mute yourself");
    let muteRole = message.guild.roles.cache.find(val => val.name === "Muted");
    if (!muteRole) {
        try {
            muteRole = await message.guild.roles.create({data:{
                name:"Muted",
                color: "#000000",
                permissions:[]
            }});
    
            message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.createOverwrite(muteRole, {
                    SEND_MESSAGES: false,
                    MANAGE_MESSAGES: false,
                    READ_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }
    let mutetime = args[1];
    if(!mutetime) return message.reply(" <a:DL_denied:734667833883099178> You didnt specify a time for temporary mute.");
    
    const embed = new Discord.MessageEmbed()
    .setColor(red_light)
    .setTimestamp()
    .addField('Action:', 'Temp Mute')
    .addField(' <a:redtick:734667231736234024> User:', `${tomute.username}#${tomute.discriminator} (${tomute.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Length', ms(ms(mutetime)))
    .setFooter(`Bot by - LΞGΞND OP#8691`);
    message.channel.send({embed});

    message.guild.member(tomute).roles.add(muteRole);

    setTimeout(function(){
        message.guild.member(tomute).roles.remove(muteRole)
        message.channel.send(`<@${tomute.id}> <a:redtick:734667231736234024> has been unmuted`)
    }, ms(mutetime));
}
}
