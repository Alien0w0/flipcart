import Card from "../model/cardSchema.js";

export const cardinfo = async (request, response) => {
  try {
    // Extract product data from the request body
    // console.log(request.body);
    const { cardholderName, cardNumber, Expire, CVV } = request.body;
    console.log(cardholderName, cardNumber, Expire, CVV);

    const card = new Card({ cardholderName, cardNumber, Expire, CVV });
    await card.save();

    // Respond with a success message
    response
      .status(201)
      .json({ message: "card created successfully", card: card });
  } catch (error) {
    // Handle any errors that occur during the creation process
    console.error("Error creating product:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};
