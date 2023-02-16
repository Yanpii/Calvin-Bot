import mongoose from "mongoose";


function connect(): Promise<typeof mongoose> {
  
  
   return mongoose.connect(`${process.env['MONGODB_URI']}/${process.env['MONGODB_DATABASE_NAME']}`);
}

export default { connect };