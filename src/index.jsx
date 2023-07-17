import React from "react";
import ReactDOMClient from "react-dom/client";
import { PoshInterface } from "./screens/MacbookAir";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PoshInterface />);
