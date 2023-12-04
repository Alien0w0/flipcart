import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { createProduct, isAuthenticated } from "../../service/api";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    createProduct(data).then((data) => {
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
  };

  const checkAdmin = () => {
    if (isAuthenticated() && isAuthenticated().user.isAdmin === true) {
      return;
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    checkAdmin();
  }, []);
  return (
    <Box
      sx={{
        alignSelf: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid direction={"row"} container>
          <Grid item xs={4}>
            <TextField
              sx={{ marginBottom: "10px" }}
              id="id"
              label="id"
              name="id"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ marginBottom: "10px" }}
              id="url"
              label="url"
              name="url"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ marginBottom: "10px" }}
              id="detailUrl"
              label="detailUrl"
              name="detailUrl"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ marginBottom: "10px" }}
              id="shortTitle"
              label="shortTitle"
              name="shortTitle"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ marginBottom: "10px" }}
              id="longTitle"
              label="longTitle"
              name="longTitle"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ marginBottom: "10px" }}
              id="mrp"
              label="mrp"
              name="mrp"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ marginBottom: "10px" }}
              id="cost"
              label="cost"
              name="cost"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ marginBottom: "10px" }}
              id="discount"
              label="discount"
              name="discount"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ marginBottom: "10px" }}
              id="quantity"
              type="number"
              label="quantity"
              name="quantity"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ marginBottom: "10px" }}
              id="description"
              label="description"
              name="description"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ marginBottom: "10px" }}
              id="tag"
              label="tag line"
              name="tag"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" type="submit">
              submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CreateProduct;
