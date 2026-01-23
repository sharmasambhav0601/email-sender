import { Schema, model, models } from "mongoose";

const EmailLogSchema = new Schema(
  {
    to: { type: String, required: true },
    subject: String,
    message: String,
    attachmentName: String,
    status: {
      type: String,
      enum: ["SENT", "FAILED"],
      required: true,
    },
    error: String,
  },
  { timestamps: true }
);

export default models.EmailLog ||
  model("EmailLog", EmailLogSchema);