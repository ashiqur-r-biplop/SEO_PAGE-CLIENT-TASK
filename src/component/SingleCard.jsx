/* eslint-disable react/prop-types */
import { SiDatabricks } from "react-icons/si";
import { BsFillBagFill } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment/moment";
import Modal from "./Modal";

const SingleCard = ({handleOpenModal, files,setFile, setMsg, msg, card, handleUploadFiles }) => {
  const date = card?.["publish-date"];
  const momentData = moment(date).format("D-MM-YYYY");
  const SingleCard= card?.client_id
  return (
    <div>
      <div className="card">
        <div className="d-flex">
          <div className="d-flex-two">
            <img src={card?.client_photo} alt="" />
            <h2>{card?.client_name}</h2>
          </div>
          <div className="d-flex-two">
            <img src={card?.resent_client_photo} alt="" />
            <h2>{card?.resent_client_name}</h2>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex-two">
            <SiDatabricks></SiDatabricks>
            <p>{card?.description.slice(0, 22)}..</p>
          </div>
          <div className="half-in-card">
            <BsFillBagFill></BsFillBagFill>
            1/2
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex-two">
            {card?.commenter?.slice(0, 2)?.map((comment, i) => {
              return <img key={i} src={comment?.commenter_photo} alt="" />;
            })}
          </div>
          <div className="d-flex-two">
            <p className="custom-bg-gray">
              {card?.commenter?.slice(0, 12).length}
              {card?.commenter?.length > 12 && "+"}
            </p>
          </div>
          <div className="d-flex-two">
            <FaRegComments></FaRegComments>
            <p>{card?.commenter?.length}</p>
          </div>
          <div className="d-flex-two">
            <span>
              <Modal handleOpenModal={handleOpenModal} card={card}  msg={msg} setMsg={setMsg} setFile={setFile} files={files} handleUploadFiles={handleUploadFiles} SingleCard={SingleCard}></Modal>
            </span>

            <p>{card?.["uploads-file"]?.length}</p>
          </div>
          <div className="d-flex-two">
            <FaRegCalendarAlt></FaRegCalendarAlt>
            <p>{momentData}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
