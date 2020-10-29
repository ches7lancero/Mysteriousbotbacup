module.exports = {
 name: "restart",
 category: "owner",
 run: async (client, message, args) => {
 
 if (message.author.id !== '602069407531008001','677776340803649557') {
 return message.channel.send(`You cannot use this command!`)
 }
 await message.channel.send(`Restarting bot...`)
 process.exit();
 
 }
}
