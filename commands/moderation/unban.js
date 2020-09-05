const Discord = require("discord.js")

module.exports = {
  name: "unban",
  category: "moderation",
  usage: "unban <I'd> ",
  description: "unban a user ",
 run: async (client, message, args) => {
   
    let dembed = new Discord.MessageEmbed()
    .setColor("0xED0B0B")
    .setDescription("🚫 ***oops! it seems you do not have the required permissons...*** ")
    if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send(dembed).then(msg => msg.delete({timeout: 5000}))


    let cembed = new Discord.MessageEmbed()
    .setColor("0x00A1EB")
    .setDescription("❓ ***Need help in `Unban` cmd***")
    .addField("Usage:", `;unban <user ID>`)
    .addField("Example:", `;unban 696969696969696969 `)

    if(!args[0]) return message.channel.send(cembed).then(msg => msg.delete({timeout: 15000})); 
    //This if() checks if we typed anything after "!unban"

    let bannedMember;
    //This try...catch solves the problem with the await
    try{                                                            
        bannedMember = await bot.users.fetch(args[0])
    }catch(e){
        let bembed = new Discord.MessageEmbed()
    .setColor("0xBD4BFF")
    .setDescription("❗ ***Seems like lhis user ID is invalid***")
        if(!bannedMember) return message.channel.send(bembed).then(msg => msg.delete({timeout: 5000}))
    }

    //Check if the user is not banned
    try {
            await message.guild.fetchBan(args[0])
        } catch(e){
            let vembed = new Discord.MessageEmbed()
    .setColor("0xBD4BFF")
    .setDescription("❗ ***This User Is Not Banned***")
            message.channel.send(vembed).then(msg => msg.delete({timeout: 5000}));
            return;
        }

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "..."
    let oldembed = new Discord.MessageEmbed()
    .setColor("0xED0B0B")
    .setDescription("🚫 ***oops! it seems I do not have the required permissons...***")
    if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send(oldembed).then(msg => msg.delete({timeout: 5000}))

    try {
        message.guild.members.unban(bannedMember, {reason: reason})
        let xembed = new Discord.MessageEmbed()
    .setColor("0x14DF73")
    .setDescription(`✅ ${bannedMember.tag} ***Has Been Successfully UnBanned From The Guild*** || Reason: ${reason}`)
        message.channel.send(xembed).then(msg => msg.delete({timeout: 5000}))
    } catch(e) {
        console.log(e.message)
    }
    let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "unban")
.addField("UnBanned:", bannedMember.id)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.addField("Date:", message.createdAt.toLocaleString())

let sChannel = message.guild.channels.cache.find(c => c.name === "brooky-modlogs")//setup 
sChannel.send(embed)

}
}