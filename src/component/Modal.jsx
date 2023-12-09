/* eslint-disable react/prop-types */

import { useEffect } from "react";

/* eslint-disable no-prototype-builtins */
const Modal = ({ setFile, msg, handleUploadFiles, modalCard }) => {
  console.log(modalCard);
  useEffect(() => {
    
  }, [modalCard]);
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <form
            method="dialog"
            className="p-9 items-center w-full flex justify-center "
          >
            <div>
              {<h2>{modalCard?.client_id}</h2>}
              <input
                type="file"
                name=""
                onChange={(e) => {
                  setFile(e.target.files);
                }}
                multiple
                id="Files"
              />
              {msg && <span>{msg}</span>}
            </div>
            <div className="modal-action m-0">
              <label
                onClick={() => handleUploadFiles(modalCard)}
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
