import mongoose from "mongoose";

const sessionsSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true, unique: true },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    date: { type: Date, required: true },
    title: { type: String, required: true },
    description: { type: String },
    fee: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["created", "inProgress", "over"],
      default: "created",
    },
    is_deleted: { type: Boolean, trim: true, default: false },
    rating: [String],
    feedback: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("sessions", sessionsSchema);
