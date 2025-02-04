import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Username required"],
  },
  email: {
    type: String,
    require: [true, "Email required"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password required"],
  },
  notes: {
    type: mongoose.Schema.ObjectId,
    ref: "Note",
  },
});

const User = mongoose.models.users || mongoose.model("User", userSchema);

export default User;
