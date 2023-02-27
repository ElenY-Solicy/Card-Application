import { useState } from "react";
import "./header.css";

function Header() {
  const [cardList, setCardList] = useState([]);
  const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  function addCard() {
    setCardList((prevCardLIst) => [randomNumber, ...prevCardLIst]);
  }

  function sortCard() {

  }
  return (
    <header className="header">
      <button className="btn" onClick={addCard}>
        Add Cards
      </button>
      <button className="btn" onClick={sortCard}>
        Sort Cards
      </button>
    </header>
  );
}

export default Header;
