import { Message, TextChannel, Client, GatewayIntentBits, Events, MessageReaction } from 'discord.js';

    
    export default async function messageReaction (reaction, user){


        const channel: TextChannel = reaction.message.channel as TextChannel;
  
        switch (channel.name) {
          case 'general-2':
            
          try {
            await reaction.users.fetch();
          } catch (error) {
            console.log('Algo salió mal al obtener el mensaje:', error);
            return;
          }
          console.log(`${reaction.message.author.username} recibió una reacción en su mensaje: "${reaction.message.content.toString()}"`);
          console.log(`${user.username} reaccionó con: "${reaction.emoji.name}"`);
          break;
        }
};

