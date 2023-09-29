import mongoose from "mongoose";

const connectRouteToDb = (handler) => async (request, context) => {
  console.log("connexion  mongoose ???");

  if (mongoose.connections[0].readyState) {
    console.log("connected");
    return handler(request, context);
  }

  await mongoose.connect(process.env.DATABASE_URI);

  return handler(request, context);
};

export default connectRouteToDb;
