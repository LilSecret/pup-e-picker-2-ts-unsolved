import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { App } from "./App";
import DogProviders from "./providers/DogProvider";
import { PageProvider } from "./providers/PageProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <DogProviders>
      <PageProvider>
        <App />
      </PageProvider>
    </DogProviders>
  </React.StrictMode>
);
