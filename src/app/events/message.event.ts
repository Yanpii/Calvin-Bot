import { Message, TextChannel } from "discord.js";
import { addMessage } from "../components/message.repository";


export default async function messageHandler(message: Message){
 
    const channel: TextChannel = message.channel as TextChannel;

    if(message.content == "/comando"){
      
      const response = await fetch(`https://api.github.com/repos/Yanpii/Calvin-Bot/pulls`);
      const data = await response.json();
      console.log(data);
    }
  
    switch (channel.name) {
      case 'canal-tarea':
        // console.log(`Mensaje: ${message.content}`);
        // console.log(`ID usuario: ${message.author.id}`);
        // console.log(`Nombre usuario: ${message.author.username}`);
        const messageContent = {discordUserId: message.author.id, message: message.content } 
        addMessage(messageContent);
        
        //repository.addMessage()


      break;
    }
}

