import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const uri =
      "mongodb+srv://h455a4mmehtab:sNckkf7KwJd79cHD@nexttodo.vux3jn2.mongodb.net/?retryWrites=true";
    const dbName = "TodoNextDb";

    await mongoose.connect(uri, {
      dbName,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};
export default connectDb;
