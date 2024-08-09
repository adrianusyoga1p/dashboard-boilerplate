import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "react-redux";
import store from "./store/store";

library.add(fas, far, fab);
config.styleDefault = "fa-solid";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
