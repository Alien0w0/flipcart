import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NotFound } from "./Components/default";
import { Box } from "@mui/material";

//components
import Header from "./Components/Header/Header";
import DetailView from "./Components/ItemDetails/DetailView";
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import Cart from "./Components/Cart/Cart";
import CreateProduct from "./Components/admin/createProduct";
import DCard from "./Components/card/card";
import AdminRoute from "./service/admimRoute";
import Info from "./Components/card/details";
import LoginDialog from "./Components/Login/LoginDialog";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<DCard />} />
              <Route path="/admin" element={<CreateProduct />} />
              <Route path="/product/:id" element={<DetailView />} />
              <Route path="/customer-details" element={<Info />} />
              <Route path="/login" element={<LoginDialog />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
