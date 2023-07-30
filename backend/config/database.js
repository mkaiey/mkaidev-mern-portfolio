import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(process.env.MONGO_URI)
    .then((c) => {
      console.log(`connected to ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(`error in connection ${e}`);
    });
};
