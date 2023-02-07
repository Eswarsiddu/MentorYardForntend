import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import AuthContextProvider from "./context/AuthContext";
import "./index.css";
import Header from "./components/Header/Header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
