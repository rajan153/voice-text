import mongoose from "mongoose";

export const databaseConnectionSystem = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const mongoConnection = mongoose.connection;

    mongoConnection.on("connected", () => {
      console.log("Database connected!!");
    });

    mongoConnection.on("error", (err) => {
      console.log("Database connection error: ", err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong while connecting with database");
  }
};
