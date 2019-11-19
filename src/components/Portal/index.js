import { createPortal} from "react-dom";
import { useEffect } from "react";

const portalRoot = document.getElementById("portal");

const Portal = ({ children }) => {
  const element = document.createElement("div");

  useEffect(() => {
    // next line will be called when component is mounted
    portalRoot.appendChild(element);
    // next line will be called before the component is removed from the UI.
    return () => {
      portalRoot.removeChild(element);
    };
  });

  return createPortal(children, element);
};

export default Portal;
