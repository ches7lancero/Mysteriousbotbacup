const discord = require("discord.js")
const db = require("quick.db")
module.exports = {
  name: "addmoney",
  category: "economy",
  description: "Owner only command - Add more money to a user",
  run: async (client, message, args) => {
   if(!message.author.id === '602069407531008001') return 
   
    let user = message.mentions.members.first() //Must ping user that you will add him the money to
    if(!user) return message.channel.send("You must specify a user")
    let money = db.fetch(`money_${message.guild.id}_${user.id}`)

    if(money === null) money = 0
    
    if(!args[1]) return message.channel.send("You must specify an amount to add")
    if(isNaN(args[1])) return message.channel.send("The money your adding is not a number!")

    db.add(`money_${message.guild.id}_${user.id}`, args[1]) //Sadly in quick.db you can add decimal numbers (ex: 53.12)
    const embed = new discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription("Successfully gave" + `${user} ${args[1]}$`) //Sorry for the spelling mistake
    .setFooter(`Bot by - KingthecoolYT`)
    message.channel.send(embed)
    
    }
}
