/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SingleCard from "./SingleCard";
import axios from "axios";
import { useState } from "react";
import StrodeId from "../hook/StrodeId";
const Cards = ({ children }) => {
  const [files, setFile] = useState(null);
  const [msg, setMsg] = useState(null);
  const { id } = StrodeId();
  let resultArray = [];
  const handleUploadFiles = () => {
    const singleCard = children.find((cart) => cart?.client_id == id);
    console.log(id);
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
        console.log(resultArray);
        const newObj = {
          ...singleCard,
          ...singleCard?.["uploads-file"].push(resultArray),
        };
        console.log(newObj);
        if (input) {
          fetch(`https://seo-page-1-server-site-ashiqur23.vercel.app/uploadFiles/${id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ newObj }),
          })
            .then((res) => res.json())
            .then((data) => {
              document.getElementById("Files").value = "";
              setMsg("Upload successfully");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        document.getElementById("Files").value = "";
        setMsg("Upload failed");
        console.log(err);
      });
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
          key={i}
          card={card}
        ></SingleCard>
      ))}
    </div>
  );
};

export default Cards;
