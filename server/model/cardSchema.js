import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  cardholderName: String,
  cardNumber: String,
  Expire: String,
  CVV: String,
});
const card = mongoose.model("card", cardSchema);

export default card;
