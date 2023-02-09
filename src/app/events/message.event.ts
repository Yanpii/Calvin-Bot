import { Message, TextChannel } from "discord.js";


export default async function messageHandler(message: Message){
 
    const channel: TextChannel = message.channel as TextChannel;
  
    switch (channel.name) {
      case 'general-2':
        console.log(message.content);
        console.log(message.author.id);
        console.log(message.author.username);

      break;
    }
}

