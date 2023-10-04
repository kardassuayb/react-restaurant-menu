import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-x-80 inset-y-40 p-10 bg-white rounded-lg">
        {children}
      </div>
    </div>,
    document.querySelector(".modal-cantainer")
  );
};

export default Modal;
