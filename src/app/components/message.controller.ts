import { addMessage, getMessages } from "./message.repository";
import { Message } from "../models/message.model";


function createMessage(message: Message){
    return addMessage(message);
  }

  function searchMessages(startDate: string, endDate: string) {
    // const d = String(date.substring(0, 9));
    return getMessages(startDate, endDate);
  }

export default { addMessage, searchMessages};