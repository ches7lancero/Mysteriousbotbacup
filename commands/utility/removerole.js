module.exports = {
  name: "removerole",
  category: "utility",
  run: async (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply(" <a:DL_denied:734667833883099178> *Error:** I don't have the **Manage Roles** permission!");
    if (message.mentions.users.size === 0) return message.reply(" <a:DL_denied:734667833883099178>Please mention a user to give the role to.\nExample: `addrole @user Members`");
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.reply(" <a:DL_denied:734667833883099178> **Error:** That user does not seem valid.");
    let rname = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.cache.find(val => val.name === rname);
    if (!role) return message.reply(` <a:DL_denied:734667833883099178> **Error:** ${rname} isn't a role on this server!`);
    let botRolePosition = message.guild.member(client.user).roles.highest.position;
    let rolePosition = role.position;
    let userRolePossition = message.member.roles.highest.position;
    if (userRolePossition <= rolePosition) return message.channel.send(" <a:DL_denied:734667833883099178> **Error:** Failed to add the role to the user because your role is lower than the specified role.")
    if (botRolePosition <= rolePosition) return message.channel.send(" <a:DL_denied:734667833883099178> *Error:** Failed to add the role to the user because my highest role is lower than the specified role.");
    member.roles.remove(role).catch(e => {
        return message.channel.send(" <a:DL_denied:734667833883099178> There was an error! It most likely is that the role you are trying to remove is higher than the the role I have!");
    });
    message.channel.send(`<a:redtick:734667231736234024> **${message.author.username}**, I've removed the **${role.name}** role from **${message.mentions.users.first().username}**.`);
    }
}