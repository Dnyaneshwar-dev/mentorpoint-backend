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
          _id: { type: String, required: true },
          text: { type: String, required: true },
          createdAt: { type: Date, required: true },
          user: { type: Object },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("sessions", sessionsSchema);
