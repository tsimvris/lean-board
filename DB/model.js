import mongoose from "mongoose";
const { Schema } = mongoose;

const cardSchema = new Schema({
  creator: { type: String, required: true },
  content: { type: String, required: true },
});

const modelCard = mongoose.models.Card || mongoose.model("Card", cardSchema);

export default modelCard;
