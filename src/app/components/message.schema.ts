import { Schema, model, Document } from "mongoose";

export interface MessageDoc extends Document {
  _id?: string;
  discordUserId: string;
  message: string;
  updatedAt?: Date;
  createdAt?: Date;
};

const schema: Schema<MessageDoc> = new Schema<MessageDoc>({
  discordUserId: { type: String, required: true },
  message: { type: String, required: true },
  updatedAt: { type: Date },
  createdAt: { type: Date }
 
}, { timestamps: true});

//schema.index({ discordUserId: 1 });

// export default MessageModel<MessageDoc>('Message', schema, 'message');
const  MessageModel = model<MessageDoc>('Message', schema, 'message');
export default MessageModel;