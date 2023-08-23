import Login from "../components/Login";
import React from "react";
import { createRoot } from "react-dom/client";

const container = window.react_mount
const root = createRoot(container)
root.render(<Login/>)