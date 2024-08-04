import React from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { loadUserFromToken } from "./reducers/authSlice";
import {
  Home,
  Men,
  Women,
  Contact,
  ProductCard,
  ProductDetail,
  Navbar,
  Signup,
  Login,
  SearchResults,
  Footer,
  CartBox,
  CartSection,
  CheckoutSuccess,
  SneakerType,
} from "./components/index.js";
import TwoPhoto from "./components/TwoPhoto.jsx";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  //   dispatch(loadUserFromToken());
  // }, [dispatch]);

  return (
    <>
      <Navbar />
      {/* <TwoPhoto /> */}

      {/* <CartBox /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
