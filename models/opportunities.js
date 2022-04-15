import mongoose from "mongoose";

const opportunitiesSchema = new mongoose.Schema(
  {
    mentor_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
    company: { type: String, required: true },
    job_title: { type: String, required: true },
    description: { type: String },
    application_link: { type: String, required: true },
    date: { type: Date },
    tag: [String],
  },
  { timestamps: true }
);

export default mongoose.model("opportunities", opportunitiesSchema);
