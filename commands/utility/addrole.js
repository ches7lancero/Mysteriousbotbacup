const Discord = require('discord.js');



module.exports = {
    name: "addrole",
    category: "utility",
    aliases: ["addrole", "+role"],
    description: "Add a role to a user.",
    async run(client, message, args) {


        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(" <a:DL_denied:734667833883099178> You dont have permission to perform this command!")
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send(" <a:DL_denied:734667833883099178> I don't have permission to perform this command.")
        
        let rMember = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.tag === args[0]) || message.guild.members.cache.get(args[0])
        if(!rMember) return message.channel.send(" <a:DL_denied:734667833883099178> Please provide a user to add a role too.")
        let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args.slice(1).join(" ")) || message.mentions.roles.first()
        if(!role) return message.channel.send(" <a:DL_denied:734667833883099178> Please provide a role to add to the user.") 
        
        
    
        if(rMember.roles.cache.has(role.id)) {
            return message.channel.send(`${rMember.displayName}, already has the role!`)
        } else {
            await rMember.roles.add(role.id).catch(e => console.log(e.message))
            message.channel.send({embed: {color: "#10de47", description: `<a:redtick:734667231736234024> Changed roles of ${rMember.displayName} to ${role.name}`}});
        }
    

    
        }
    
}