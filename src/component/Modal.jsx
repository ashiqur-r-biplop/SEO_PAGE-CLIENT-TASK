/* eslint-disable react/prop-types */
/* eslint-disable no-prototype-builtins */

import { HiLink } from "react-icons/hi";
const Modal = ({ setFile, msg, handleUploadFiles, handleOpenModal, card }) => {
  return (
    <div>
      <label
        onClick={() => handleOpenModal(card?.client_id)}
        htmlFor="my_modal_6"
        className="cursor-pointer"
      >
        <HiLink></HiLink>
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <form
            method="dialog"
            className="p-9 items-center w-full flex justify-center "
          >
            <div>
              <input
                type="file"
                name=""
                onChange={(e) => {
                  setFile(e.target.files);
                }}
                multiple
                id=""
              />
              {msg && <span>{msg}</span>}
            </div>
            <div className="modal-action m-0">
              <label
                onClick={() => handleUploadFiles()}
                className="btn btn-success"
              >
                Upload
              </label>
            </div>
          </form>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="bg-transparent p-5 absolute top-0 right-0 font-semibold cursor-pointer"
            >
              X
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
