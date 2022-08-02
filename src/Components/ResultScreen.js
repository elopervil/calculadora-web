import React from "react";

const ResultScreen = ({ value }) => {
    return (
      <input readonly type="text" value={value}/>
    );
}

export default ResultScreen