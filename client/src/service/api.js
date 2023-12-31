import axios from "axios";

// const url = "http://localhost:8000";
const url = "https://flipcart-bk.onrender.com";

// new url added to the file

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("Error while calling login API: ", error);
  }
};

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("Error while calling Signup API: ", error);
  }
};

export const createProduct = async (user) => {
  try {
    return await axios.post(`${url}/products`, user);
  } catch (error) {
    console.log("Error while calling Signup API: ", error);
  }
};

export const getProductById = async (id) => {
  try {
    return await axios.get(`${url}/product/${id}`);
  } catch (error) {
    console.log("Error while getting product by id response", error);
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`${url}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const addCard = async (info) => {
  try {
    return await axios.post(`${url}/card`, info);
  } catch (error) {
    console.log("Error while calling Signup API: ", error);
  }
};

export const isAuthenticated = () => {
  // return true and return the user if user is authenticated
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
