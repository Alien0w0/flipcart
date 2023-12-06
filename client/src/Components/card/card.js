import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { addCard } from "../../service/api";
import { useNavigate } from "react-router-dom";

function DCard() {
  const [cards, setCards] = useState([
    { type: "mastercard", number: "**** **** **** 3193" },
    { type: "visa", number: "**** **** **** 4296" },
  ]);
  const navigate = useNavigate();
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expire, setExpire] = useState("");
  const [cvv, setCvv] = useState("");

  const handleRemoveCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    addCard(data).then((data) => {
      try {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    });
    navigate("/");
  };

  return (
    <MDBContainer
      className="py-5"
      fluid
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <MDBRow
          style={{ marginTop: "15%" }}
          className=" d-flex justify-content-center"
        >
          <MDBCol md="10" lg="8" xl="5">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <div className="text-center mb-4">
                  <h3>Payment</h3>
                </div>

                <MDBInput
                  label="Cardholder's Name"
                  name="cardholderName"
                  placeholder="Anna Doe"
                  type="text"
                  size="lg"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                />

                <MDBRow className="my-4">
                  <MDBCol size="6">
                    <MDBInput
                      label="Card Number"
                      name="cardNumber"
                      placeholder="1234 5678 1234 5678"
                      type="text"
                      size="lg"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBInput
                      label="Expire"
                      name="Expire"
                      type="number"
                      size="lg"
                      placeholder="MM/YYYY"
                      value={expire}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (!isNaN(val) && val.length <= 4) {
                          setExpire(val);
                        }
                      }}
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBInput
                      label="CVV"
                      name="CVV"
                      type="number"
                      size="lg"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (!isNaN(val) && val.length <= 3) {
                          setCvv(val);
                        }
                      }}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBBtn
                  color="success"
                  size="lg"
                  type="submit"
                  block
                  onClick={() =>
                    handleAddCard({
                      type: "custom-card", // Adjust the type as needed
                      number: "Custom Card Number", // Provide the actual card number
                    })
                  }
                >
                  Buy Now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}

export default DCard;
