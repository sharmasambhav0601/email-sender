import { Schema, model, models } from "mongoose";

const OAuthTokenSchema = new Schema(
  {
    userEmail: { type: String, required: true },
    refreshToken: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.OAuthToken ||
  model("OAuthToken", OAuthTokenSchema);