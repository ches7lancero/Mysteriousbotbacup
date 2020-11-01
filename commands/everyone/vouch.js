const discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "vouch",
  aliases: [],
  description: "Vouch Someone",
  run: async (client, message, args) => {
    let user = message.mentions.members.first()
    if(!user) return message.channel.send("You forgot to specify a user")
    if(user.id === message.author.id) return message.channel.send("You cant vouch your self!")
    let ifvouch = db.fetch(`vouch_${message.author.id}_${user.id}`)
    if(ifvouch === 1) return message.channel.send("You have already vouched this user you cannot vouch him again")
    
    
    db.add(`vouches_${user.id}`, 1)
    db.add(`vouch_${message.author.id}_${user.id}`, 1)
    let uvouches = db.fetch(`vouches_${user.id}`)
    
    message.channel.send(`${message.author} have successfully vouched for ${user.user.tag} and ${user.user.tag} now has ${uvouches}`)
    
  }
}
