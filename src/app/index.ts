import express, { Express } from "express";
import { TextChannel, Client, GatewayIntentBits, Events } from 'discord.js';
import messageHandler from "./events/message.event";
import messageReaction from "./events/messageReaction.event";

async function main(){
  
  const server: Express = express();
  const app = express();
  const port: number = parseInt(process.env['PORT'] || '3000');
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessageReactions,
    ],
  });
  app.use(express.json());
  const chan=client.channels.valueOf();
  
  
  // When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});
// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

app.get('/ping', (req, res) => {
    console.log('someone pinged here!!')
    res.send('pong')
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

/////////// messages //////////
client.on('messageCreate', messageHandler);

//////// reactions ////////////
client.on('messageReactionAdd', messageReaction);
      
////////////////////////////////
}


export default { main };