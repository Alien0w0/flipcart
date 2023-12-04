import React from "react";
import "./info.css";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  return (
    <div className="shipping-data">
      <form className="form">
        <div className="header">Shipping Information</div>
        <div className="inputs">
          <input placeholder="Name" className="input" type="text" />
          <input placeholder="Email" className="input" type="text" />
          <input placeholder="Address" className="input" type="text" />
          <input placeholder="Shipping Address" className="input" type="text" />
          <input placeholder="Postal Code" className="input" type="text" />
          <button
            onClick={() => {
              navigate("/payment");
            }}
            type="submit"
            className="sigin-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Info;
