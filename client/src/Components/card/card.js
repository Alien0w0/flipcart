import React, { useState, useEffect } from "react";
import "./DCard.css";
import { useNavigate } from "react-router-dom";

const DCard = () => {
  const [fields, setFields] = useState({
    cardnumber: "",
    cardholder: "",
    exp: "",
    cvc: "",
  });
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const isValid = Object.values(fields).every((value) => value.length > 0);
    setValid(isValid);
  };

  useEffect(() => {
    validate();
  }, [fields]);

  const handleChange = (field, value) => {
    setFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const handleKeyDown = (e, field, maxLength) => {
    if (
      fields[field].length >= maxLength &&
      e.keyCode !== 8 &&
      e.keyCode !== 9 &&
      e.keyCode !== 46
    ) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    // Add your form submission logic here
  };

  return (
    <div className="card-html ">
      <div
        className="container cc"
        data-fields={JSON.stringify(fields)}
        data-valid={valid}
      >
        <div
          className="cc"
          data-fields={JSON.stringify(fields)}
          data-valid={valid}
        >
          <form className="cc__form" onSubmit={handleSubmit} onKeyUp={validate}>
            <fieldset className="fieldset_payment">
              <legend className="legend_payment">Payment Details</legend>
              <div className="fieldgroup">
                <label htmlFor="card-number" className="label-payment">
                  Card Number
                </label>
                <input
                  id="card-number"
                  type="text"
                  className="input-payment"
                  tabIndex="1"
                  value={fields.cardnumber}
                  onChange={(e) => handleChange("cardnumber", e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, "cardnumber", 18)}
                />
              </div>
              <div className="fieldgroup">
                <label htmlFor="cardholder" className="label-payment">
                  Cardholder
                </label>
                <input
                  id="cardholder"
                  className="input-payment"
                  type="text"
                  tabIndex="2"
                  value={fields.cardholder}
                  onChange={(e) => handleChange("cardholder", e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, "cardholder", 24)}
                />
              </div>
              <div className="fieldgroup fieldgroup--half">
                <label htmlFor="card-exp" className="label-payment">
                  Expires
                </label>
                <input
                  id="card-exp"
                  type="text"
                  className="input-payment"
                  placeholder="MM/YY"
                  tabIndex="3"
                  value={fields.exp}
                  onChange={(e) => handleChange("exp", e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, "exp", 4)}
                />
              </div>
              <div className="fieldgroup fieldgroup--half">
                <label htmlFor="card-cvc" className="label-payment">
                  CVC
                </label>
                <input
                  id="card-cvc"
                  type="text"
                  className="input-payment"
                  tabIndex="4"
                  value={fields.cvc}
                  onChange={(e) => handleChange("cvc", e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, "cvc", 3)}
                />
              </div>
              <button
                className="btn-submit"
                type="submit"
                value="Add Card"
                tabIndex="5"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="price-detail">
        <p className="price-detail-heading">Price Detail</p>
        <div className="price-detail-item">
          <label>Price Item</label>
          <label>0000</label>
        </div>
        <div className="price-detail-item">
          <label>Delivery charges</label>
          <label>Free</label>
        </div>
        <hr />
        <div className="price-detail-item">
          <label>Amount Payable</label>
          <label>0000</label>
        </div>
      </div>
    </div>
  );
};

export default DCard;
