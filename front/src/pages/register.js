import React from "react";
import { createRoot } from "react-dom/client";
import RegisterForm from "../components/RegisterForm";

const container = window.react_mount
const root = createRoot(container)
root.render(<RegisterForm/>)