import mongoose from "mongoose";

const slotsSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    mentor_id: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    mentor_slots: {
      type: [
        {
          start_time: { type: Date, required: true },
          end_time: { type: Date, required: true },
          is_booked: { type: Boolean, default: false },
        },
      ],
      validate: [(val) => val.length > 0, "{PATH}"],
    },
    user_slots: {
      type: [
        {
          start_time: { type: Date, required: true },
          end_time: { type: Date, required: true },
          is_booked: { type: Boolean, default: false },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("slots", slotsSchema);
