import express from "express";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../controller/product-controller.js";
import { userSignUp, userLogIn } from "../controller/user-controller.js";
// import { addItemInCart } from '../controller/cart-controller.js';
import {
  addPaymentGateway,
  paymentResponse,
} from "../controller/payment-controller.js";
import { cardinfo } from "../controller/card-controller.js";

const router = express.Router();

//login & signup
router.post("/signup", userSignUp);
router.post("/login", userLogIn);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);
router.post("/products", createProduct);

// router.post('/cart/add', addItemInCart);

router.post("/card", cardinfo);

router.post("/payment", addPaymentGateway);
router.post("/callback", paymentResponse);

export default router;
