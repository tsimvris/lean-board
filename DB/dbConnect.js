import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

export const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("You are now Connected to MongoDB");
  } catch (error) {
    console.error("Your are not connected because ->", error.message);
  }
};
