import mongoose from "mongoose";

const slotsSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    mentor_id: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    slots: {
      type: [
        {
          start_time: { type: Date, required: true },
          end_time: { type: Date, required: true },
        },
      ],
      validate: [(val) => val.length > 0, "{PATH}"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("slots", slotsSchema);
