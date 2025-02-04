import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    noteImages: [
      {
        type: String,
      },
    ],
    noteAudio: {
      type: String,
    },
  },
  { timestamps: true }
);

const Note = mongoose.models.notes || mongoose.model("Note", noteSchema);

export default Note;
