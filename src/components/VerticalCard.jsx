import React from "react";
function VerticalCard(props) {
  function cardClicked(e) {
    // console.log(e.target.parentNode.classList.contains("swiper-slide-active"));
    if (!e.target.classList.contains("rotated")) {
      console.log("added");
      console.log(e.target);
      e.target.classList.add("rotated");
    } else {
      console.log("removed");
      e.target.classList.remove("rotated");
    }
  }

  return (
    <div
      className="vertical-card"
      // onClick={cardClicked}
      style={{ marginTop: props.marginTop }}
    >
      <img className="card-img" src={props.img} alt="anything"></img>
      <div className="card-text">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </div>
      <ul className="rotated-items">
        <h1 className="heading">This is Title</h1>
        <li>dwadwd dwa wadwa wad </li>
        <li>dwadwd dwa wadwa wad </li>
        <li>dwadwd dwa wadwa wad </li>
        <li>dwadwd dwa wadwa wad dwadwd dwa wadwa </li>
        <li>wdwdawd dwa wadwa adwadd</li>
        <li>dwadwd dwa wadwa wad dwadwd dwa wadwa </li>
      </ul>
    </div>
  );
}
export default VerticalCard;
