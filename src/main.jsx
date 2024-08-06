import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./reducers/rootReducer.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { SnackbarProvider } from "notistack";
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
  SandalSlipper,
  ShoeCare,
  Peshawari,
  Socks,
  SportType,
  FormalType,
  HeelSandal,
  Loafer,
  PumpKhusa,
  SlipperChappal,
  SneakerCasual,
  Sock,
} from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "women",
        element: <Women />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-cart",
        element: <CartSection />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
      {
        path: "checkout-success",
        element: <CheckoutSuccess />,
      },
      // sub-menus men
      {
        path: "men/sneakers-&-casual-shoes",
        element: <SneakerType />,
      },
      {
        path: "men/All",
        element: <Men />,
      },
      {
        path: "men/formal-shoes",
        element: <FormalType />,
      },
      {
        path: "men/sports-shoes",
        element: <SportType />,
      },
      {
        path: "men/sandals-&-slippers",
        element: <SandalSlipper />,
      },
      {
        path: "men/peshawari-chappal",
        element: <Peshawari />,
      },
      {
        path: "men/socks",
        element: <Socks />,
      },
      {
        path: "men/shoe-care-products",
        element: <ShoeCare />,
      },
      // sub-menus women
      {
        path: "women/pumps-&-khusa",
        element: <PumpKhusa />,
      },
      {
        path: "women/all",
        element: <Women />,
      },
      {
        path: "women/heels-&-sandals",
        element: <HeelSandal />,
      },
      {
        path: "women/loafers",
        element: <Loafer />,
      },
      {
        path: "women/sneakers-&-casual-shoes",
        element: <SneakerCasual />,
      },
      {
        path: "women/slippers-&-chappal",
        element: <SlipperChappal />,
      },
      {
        path: "women/socks",
        element: <Sock />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);
