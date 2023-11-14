import React from "react";
import ReactDOM from "react-dom/client";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { generateApiClient, ApiProvider } from "@hybris-software/use-query";

const apiClient = generateApiClient({
   baseUrl: "",
   authorizationHeader: "Authorization",
   authorizationPrefix: "Token ",
   acceptLanguage: localStorage.getItem("language") || "EN",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <ApiProvider apiClient={apiClient}>
         <App />
      </ApiProvider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
