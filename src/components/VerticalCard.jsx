// import React from "react";
// function VerticalCard(props) {
//   return (
//     <div className="vertical-card-container">
//       <div
//         className="vertical-card front"
//         style={{ marginTop: props.marginTop }}
//       >
//         <img className="card-img" src={props.img} alt="anything"></img>
//         <div className="card-text">
//           <h1>{props.title}</h1>
//           <p>{props.body}</p>
//         </div>
//       </div>
//       <ul className="vertical-card rotated-items">
//         <h1 className="heading">This is Title</h1>
//         <li>dwadwd dwa wadwa wad </li>
//         <li>dwadwd dwa wadwa wad </li>
//         <li>dwadwd dwa wadwa wad </li>
//         <li>dwadwd dwa wadwa wad dwadwd dwa wadwa </li>
//         <li>wdwdawd dwa wadwa adwadd</li>
//         <li>dwadwd dwa wadwa wad dwadwd dwa wadwa </li>
//       </ul>
//     </div>
//   );
// }
// export default VerticalCard;

import React from "react";
function VerticalCard(props) {
  return (
    <div className="vertical-card" style={{ marginTop: props.marginTop }}>
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
