const discord = require('discord.js');

const moment = require('moment')
const { Message, Client } = require("discord.js");

module.exports = {
    name: "help",
    run: async (client, message, args) => {
            
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');

            const UserEmbed = new discord.MessageEmbed()
                    .setColor('#9b9b9b')
                    .setTitle(`Help command`)
                    .setDescription(`Help page for : ( NAME OF YOUR BOT ) \nThe prefix is : ( PREFIX OF YOUR BOT )`)
                    .addField('Infos',infos)
                    .setImage(' ( BANNER OF YOUR BOT')
                    .setFooter(`By FlyHart`)
                    .setTimestamp(new Date())
            message.channel.send({ embeds: [UserEmbed] }) 
        }
    },
};

//FlyHArt//