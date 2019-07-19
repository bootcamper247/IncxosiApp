import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
      <div>
    <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
    </div>
  );
}

export default CardBtn;

//<i class="fas fa-angle-right"></i>