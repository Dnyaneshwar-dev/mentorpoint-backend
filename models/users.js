import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    bio: { type: String, required: true },
    address: { type: String, trim: true },
    company: "",
    mobile_number: {
      type: String,
      trim: true,
      required: [true, "Mobile number is required"],
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    profile_picture: { type: String },
    role: {
      type: String,
      required: true,
      enum: ["student", "mentor"],
      default: "student",
    },
    linkedin_url: { type: String, required: false },
    instagram_url: { type: String, required: false },
    github_url: { type: String, required: false },
    password: { type: String, required: false },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", usersSchema);