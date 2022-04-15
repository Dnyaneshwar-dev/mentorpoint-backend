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
    chats: [Object],
  },
  { timestamps: true }
);

export default mongoose.model("sessions", sessionsSchema);
