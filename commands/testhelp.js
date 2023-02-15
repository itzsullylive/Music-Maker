const { ApplicationCommandOptionType, EmbedBuilder, } = require('discord.js')
const db = require("../mongoDB");
module.exports = {
  name: "test",
  description: "It helps you to get information about bot and commands.",
  permissions: "0x0000000000000800",
  
  
  run: async (client, interaction) => {
   
    const  days = Math.trunc(client.uptime / 86400000)
         const hours = Math.trunc(client.uptime / 3600000) % 24
         const minutes = Math.trunc(client.uptime / 60000) % 60
         const seconds = Math.trunc(client.uptime / 1000) % 60
    const embed = new EmbedBuilder()
   
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
    .addFields([
        {name:"**📈__STATS:__**",value:`⚙️ **${client.commands.map(c => c.name).length} Commands**
        📁 on **  \`SOON\` Servers**
        ⌚ \`${days} Days\` , \`${hours} Hrs\` ,  \`${minutes} Mins\` ,  \`${seconds} Secs\` **Uptime**
        📶\`${client.ws.ping}ms\` **Ping**`}
    ]) 
        return interaction.reply({ embeds: [embed] }).catch(err => { })
  
  },
};
