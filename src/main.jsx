import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted fonts (bundled with the site, no external requests).
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";

// Styles: tokens (colours for each theme) first, then base, shared parts, then sections.
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/sections.css";
import "./styles/projects.css";
import "./styles/contact.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
