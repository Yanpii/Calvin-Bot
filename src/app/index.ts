import express, { Express } from "express";
import { TextChannel, Client, GatewayIntentBits, Events } from 'discord.js';
import messageHandler from "./events/message.event";
import messageReaction from "./events/messageReaction.event";
import mongooseModule from "./modules/mongoose.module";
import components from "./components/message.network";

async function main(){
  
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

/////////// messages //////////
client.on('messageCreate', messageHandler);

//////// reactions ////////////
client.on('messageReactionAdd', messageReaction);

  app.use(express.json());
  app.use('/api', components); 
  
  // When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
try{
await client.login(process.env.DISCORD_TOKEN);
}catch(error){
  console.log(`Failed discord login ❌`);
}

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

try {
  await mongooseModule.connect();
  console.log('Database connection successful ✅');
} 
catch (error) {
  console.log(`Failed database connection ❌`);
}

}


export default { main };