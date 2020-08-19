import React from "react";
import "./Rank.styles.scss";

const Rank = () => {
  return (
    <div className='rank'>
      <div className='rank-text'>{"Calum, your current rank is..."}</div>
      <div className='rank-value'>{"#5"}</div>
    </div>
  );
};

export default Rank;