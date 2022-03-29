import mongoose from "mongoose";

const opportunitiesSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    company: { type: String, required: true },
    job_title: { type: String, required: true },
    description: { type: String, required: false },
    application_link: { type: String, required: true },
    tag: [String],
  },
  { timestamps: true }
);

export default mongoose.model("opportunities", opportunitiesSchema);
