/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import Cards from "./component/Cards";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [incomplete, setIncomplete] = useState([]);
  const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [review, setReview] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [overd, setOverd] = useState([]);

  useEffect(() => {
    fetch("https://seo-page-1-server-site-ashiqur23.vercel.app/cards")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]),
          setIncomplete(data[0]?.incomplete),
          setTodo(data[0]?.todo),
          setDoing(data[0]?.doing),
          setReview(data[0]?.Review),
          setCompleted(data[0]?.completed),
          setOverd(data[0]?.overd),
          setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="grid">
      <div className="column-body-custom">
        <div className="parent-singe-column">
          <div className="card-body">
            <div className="column-title-section">
              <div className="left-column-title">
                <div className="left-column-title-color-red"></div>
                <h4>incomplete</h4>
              </div>
              <h5 className="right-column-title">{incomplete.length}</h5>
            </div>
            <Cards>{incomplete}</Cards>
          </div>
        </div>
      </div>
      <div className="column-body-custom">
        <div className="parent-singe-column">
          <div className="card-body">
            <div className="column-title-section">
              <div className="left-column-title">
                <div className="left-column-title-color-sky"></div>
                <h4>To Do</h4>
              </div>
              <h5 className="right-column-title">{todo.length}</h5>
            </div>
            <Cards>{todo}</Cards>
          </div>
        </div>
      </div>
      <div className="column-body-custom">
        <div className="parent-singe-column">
          <div className="card-body">
            <div className="column-title-section">
              <div className="left-column-title">
                <div className="left-column-title-color-yellow"></div>
                <h4>Doing</h4>
              </div>
              <h5 className="right-column-title">{doing.length}</h5>
            </div>
            <Cards>{doing}</Cards>
          </div>
        </div>
      </div>
      <div className="column-body-custom">
        <div className="parent-singe-column">
          <div className="card-body">
            <div className="column-title-section">
              <div className="left-column-title">
                <div className=""></div>
                <h4>Under Review</h4>
              </div>
              <h5 className="right-column-title">{review.length}</h5>
            </div>
            <Cards>{review}</Cards>
          </div>
        </div>
      </div>
      <div className="column-body-custom">
        <div className="parent-singe-column">
          <div className="card-body">
            <div className="column-title-section">
              <div className="left-column-title">
                <div className=""></div>
                <h4>Completed</h4>
              </div>
              <h5 className="right-column-title">{completed.length}</h5>
            </div>
            <Cards>{completed}</Cards>
          </div>
        </div>
      </div>
      <div className="column-body-custom">
        <div className="parent-singe-column">
          <div className="card-body">
            <div className="column-title-section">
              <div className="left-column-title">
                <div className=""></div>
                <h4>overd</h4>
              </div>
              <h5 className="right-column-title">{overd.length}</h5>
            </div>
            <Cards>{overd}</Cards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
