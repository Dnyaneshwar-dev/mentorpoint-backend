import mongoose from "mongoose";

const sessionsSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
    start_time: { type: Date, required: true },
    service_id: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "services",
    },
    chats: {
      type: [
        {
          user_id: { type: mongoose.Types.ObjectId, required: true },
          message: { type: String, required: true },
          time: { type: Date, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("sessions", sessionsSchema);
