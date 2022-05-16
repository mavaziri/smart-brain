import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      {/* <div className="white f3">{"Mohammad, your current rank is..."}</div>
      <div className="white f1">{"#5"}</div> */}
      <div className="white f3">{`Your current user is: ${name}`}</div>
      <div className="white f3">{`Your current entries is: ${entries}`}</div>
    </div>
  );
};

export default Rank;
