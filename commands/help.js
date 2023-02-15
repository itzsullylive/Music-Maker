const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js')
const db = require("../mongoDB");
module.exports = {
  name: "help",
  description: "It helps you to get information about bot and commands.",
  permissions: "0x0000000000000800",
  
  
  run: async (client, interaction) => {
 ;

    const embed = new EmbedBuilder()
    .setTitle("Command list")
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
    .setDescription(`It's time to listen to music on your discord server with a completely free and advanced interface. Music bot that supports playing music on many platforms that will make your server feel special.`)
    .addFields(
      { name: 'Bot Commands', value: '\`/autoplay\` | \`/back\` | \`/statistic\` | \`/channel\` | \`/clear\` | \`/dj\` | \`/filter\` | \`/help\` | \`//language\` | \`/loop\` | \`/nowplaying\` | \`/pause\` |  \`/ping\` | \`/play\` | \`/playlist\` |  \`/queue\` | \`/resume\` | \`/save\` | \`/search\` | \`/seek\` | \`/servers\` | \`/shuffle\` | \`/skip\` | \`/stop\` | \`/time\` | \`/volume\`'  }
    )
    .setFooter({ text: `MusicMaker ❤️` })
    .setTimestamp()
        return interaction.reply({ embeds: [embed] }).catch(err => { })
  
  },
};
