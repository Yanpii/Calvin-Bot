import MessageModel from "./message.schema";
import { Message } from "../models/message.model";



function addMessage(message: Message){
  const m = new MessageModel(message);
  // m.save();
  return MessageModel.create(message);

}

async function getMessages(startDate: string, endDate: string){

     //FECHAS DE MONGO PARA PROBAR
//  startDate = "2023-02-15T22:35:00.071+00:00";
//  endDate = "2023-02-16T17:34:56.202+00:00";

 const docs = await MessageModel.find({createdAt:{ $gte: startDate, $lte: endDate }});

 return docs.map(doc => doc).sort(); 

}


export { addMessage, getMessages };
