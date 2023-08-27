/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SingleCard from "./SingleCard";
import axios from "axios";
import { useState } from "react";
const Cards = ({ children }) => {
  const [files, setFile] = useState(null);
  const [msg, setMsg] = useState(null);
  let resultArray = [];
  const [obj, setObj] = useState({});
  const [objId, setObjId] = useState(0);
  const handleUploadFiles = () => {
    if (!files) {
      setMsg("No File Selected");
      return;
    }
    const fd = new FormData();
    for (let i = 0; i < files.length; i++) {
      fd.append(`file${i + 1}`, files[i]);
    }

    setMsg("Uploading....");

    axios
      .post("http://httpbin.org/post", fd, {
        headers: {
          "Custom-Header": "value",
        },
      })
      .then((res) => {
        const input = res.data.files;
        for (const key in input) {
          if (input.hasOwnProperty(key)) {
            const fileObject = {
              name: key,
              data: input[key],
            };
            resultArray.push(fileObject);
          }
        }
        if (input) {
          fetch(`https://seo-page-1-server-site-ashiqur23.vercel.app/uploadFiles/${objId}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ resultArray }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        console.log(obj?.client_id);
        setMsg("Upload successfully");
      })
      .catch((err) => {
        setMsg("Upload failed");
        console.log(err);
      });
  };
  const handleOpenModal = (id) => {
    const singleCard = children.find((cart) => cart?.client_id == id);
    setObj(singleCard);
    setObjId(id)
  };
  return (
    <div>
      {children.map((card, i) => (
        <SingleCard
          msg={msg}
          setMsg={setMsg}
          setFile={setFile}
          files={files}
          handleUploadFiles={handleUploadFiles}
          handleOpenModal={handleOpenModal}
          key={i}
          card={card}
        ></SingleCard>
      ))}
    </div>
  );
};

export default Cards;
