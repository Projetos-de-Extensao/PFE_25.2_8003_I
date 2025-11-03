import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>
);