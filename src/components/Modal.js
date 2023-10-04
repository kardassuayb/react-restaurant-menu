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
    <div className="fixed inset-0 flex items-center justify-center ">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80 "
      ></div>
      <div className="z-50 bg-white rounded-lg p-6 sm:w-full sm:max-w-md">
        {children}
      </div>
    </div>,
    document.querySelector(".modal-cantainer")
  );
};

export default Modal;
