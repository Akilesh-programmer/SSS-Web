import { createPortal } from "react-dom";
import PropTypes from "prop-types";

/**
 * ModalPortal mounts children to document.body to avoid layout issues
 * caused by ancestors with CSS transforms (Framer Motion wrappers, etc.).
 * It returns null on the server (SSR safety) and when not mounted yet.
 */
const ModalPortal = ({ children }) => {
  if (typeof window === "undefined") return null;
  const target = document.body;
  return createPortal(children, target);
};

ModalPortal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalPortal;
