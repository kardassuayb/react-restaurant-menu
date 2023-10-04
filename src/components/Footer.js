import React, { useState } from "react";
import Insta from "../images/insta.png";
import Modal from "./Modal";

const Footer = () => {
  const linkedIn = "https://www.linkedin.com/in/kardassuayb/";
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal onClose={handleClose}>
      <form onSubmit={handleClose} className="flex flex-col gap-4">
        <textarea
          placeholder="Mesajınız"
          className="border rounded px-1 py-1"
          rows={8}
          cols={20}
        />
        <input
          placeholder="Adınız"
          type="text"
          className="border rounded py-1 px-1"
        />
        <input
          placeholder="Telefon Numaranız"
          type="number"
          className="border rounded py-1 px-1"
        />
        <button className="flex justify-center px-2 py-1 border-2 font-semibold border-sky-700 text-sky-700 rounded-full bg-slate-100">
          Gönder
        </button>
      </form>
    </Modal>
  );
  return (
    <div className="footer">
      <div className="flex p-2 justify-center gap-5 items-center bg-slate-100 rounded mt-10">
        <button>
          <img alt="instagram" src={Insta} className="w-10 h-10" />
        </button>
        <button
          onClick={handleClick}
          className="flex items-center px-2 py-1 border-2 font-semibold border-sky-700 text-sky-700 rounded-full bg-slate-100"
        >
          Bize Ulaşın
        </button>
      </div>
      <div className="flex p-0 justify-center gap-5 items-center bg-slate-100 rounded mt-10">
        <div>
          Developed by{" "}
          <a href={linkedIn} className="text-sky-700 text-md font-medium">
            Şuayb Kardaş
          </a>
        </div>
      </div>
      {showModal && modal}
    </div>
  );
};

export default Footer;
