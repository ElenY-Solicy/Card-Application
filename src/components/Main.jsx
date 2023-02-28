import "./main.css";
import { v4 as uuid } from "uuid";

function Main({ cardList }) {
  console.log(cardList);
  return (
    <div className="main">
      {cardList.map((number) => (
        <div className="cards" key={uuid()}>
          {number}
          <span>&#10005;</span>
        </div>
      ))}
    </div>
  );
}
export default Main;
