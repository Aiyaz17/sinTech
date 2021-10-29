import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
function VerticalCard(props) {
  // const [clickedCardItems, setClickedCardItems] = useState(null);
  function cardClicked(e) {
    // console.log(e.target.parentNode.classList.contains("swiper-slide-active"));
    console.log(e.target.parentNode);
  }

  return (
    <div
      className="vertical-card"
      onClick={cardClicked}
      style={{ marginTop: props.marginTop }}
    >
      <img className="card-img" src={props.img} alt="anything"></img>
      <div className="card-text">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </div>
    </div>
  );
}
export default VerticalCard;
