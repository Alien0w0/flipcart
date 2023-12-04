import { response } from "express";
import Product from "../model/productSchema.js";

export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});

    response.json(products);
  } catch (error) {}
};

export const getProductById = async (request, response) => {
  try {
    const products = await Product.findOne({ id: request.params.id });
    response.json(products);
  } catch (error) {}
};

export const createProduct = async (request, response) => {
  try {
    // Extract product data from the request body
    const {
      id,
      url,
      detailUrl,
      title,
      price,
      quantity,
      description,
      discount,
      tagline,
    } = request.body;

    // Create a new Product instance
    const newProduct = new Product({
      id,
      url,
      detailUrl,
      title,
      price,
      quantity,
      description,
      discount,
      tagline,
    });

    // Save the new product to the database
    await newProduct.save();

    // Respond with a success message
    response
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    // Handle any errors that occur during the creation process
    console.error("Error creating product:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};
