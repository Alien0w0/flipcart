import React, { useState } from "react";
import "./info.css";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Info = () => {
  const navigate = useNavigate();
  const [phoneNumbers, setPhoneNumbers] = useState([""]);

  const handleAddPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  return (
    <div className="shipping-data">
      <form className="form">
        <div className="header">Shipping Information</div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Fullname" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone Number" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={handleAddPhoneNumber}
              variant="contained"
              color="primary"
              className="sigin-btn"
            >
              + Add Alternate Phone Number
            </Button>
          </Grid>
          {phoneNumbers.map((number, index) => (
            <Grid key={index} item xs={12}>
              <TextField
                label={`Alternate Phone Number ${index + 1}`}
                fullWidth
                variant="outlined"
                value={number}
                onChange={(e) => {
                  const updatedNumbers = [...phoneNumbers];
                  updatedNumbers[index] = e.target.value;
                  setPhoneNumbers(updatedNumbers);
                }}
              />
            </Grid>
          ))}
          <Grid item xs={12} sm={6}>
            <TextField label="Pincode" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={() => {
                // Implement logic to fetch current location
              }}
              variant="contained"
              color="primary"
              className="location-btn"
            >
              Fetch Current Location
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="State" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="City" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Road Name" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => {
                navigate("/payment");
              }}
              sx={{backgroundColor:"#FF5800" , width:"100%"}}
              type="submit"
              variant="contained"
              color="primary"
              className="submit-btn"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Info;
