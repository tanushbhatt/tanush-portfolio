import { useRef, useState } from "react";
import Button from "./Button.jsx";
import { CheckIcon, CopyIcon } from "./Icons.jsx";

// Works on https and localhost via the Clipboard API, with an older fallback.
async function copyText(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fall through to the legacy approach below.
  }

  try {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(field);
    return ok;
  } catch {
    return false;
  }
}

/** Copies the email address and confirms with a short "Copied" message. */
export default function CopyEmailButton({ email }) {
  const [status, setStatus] = useState("idle"); // idle | copied | failed
  const timer = useRef(0);

  const handleClick = async () => {
    const ok = await copyText(email);
    setStatus(ok ? "copied" : "failed");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), 2200);
  };

  const labels = {
    idle: "Copy email",
    copied: "Copied",
    failed: "Copy failed",
  };

  return (
    <>
      <Button
        variant="secondary"
        icon={status === "copied" ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
        onClick={handleClick}
      >
        {labels[status]}
      </Button>
      <span className="visually-hidden" role="status" aria-live="polite">
        {status === "copied" ? "Email address copied to clipboard" : ""}
        {status === "failed" ? "Could not copy the email address" : ""}
      </span>
    </>
  );
}
