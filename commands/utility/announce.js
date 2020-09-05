const Discord = require('discord.js');



module.exports = {
    name: "announce",
    description: "Announce Message By User",
      category: "utility",

    async run (client, message, args) {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I don\'t have the right permissions.')

        message.delete()
        let desc = args.join(" ")
        const sEmbed = new Discord.MessageEmbed()
        .setFooter(`© ${message.guild.name}`, client.user.displayAvatarURL({ format: "png", dynamic: true }))
        .setColor('CYAN')
        .setTitle(`${message.guild.name} ANNOUNCEMENT`)
        .setThumbnail(message.guild.iconURL({ format: "png", dynamic: true }))
        .setDescription(desc)
            message.channel.send({embed: sEmbed})
           



    }
}