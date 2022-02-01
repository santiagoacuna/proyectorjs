import React from "react";
import ItemCount from "./itemCount"

const itemListContainer = ({text}) => {

  return(
      <div className="itemList">
      <p>{text}</p>
      <ItemCount />
      </div>
      )
}

export default itemListContainer;