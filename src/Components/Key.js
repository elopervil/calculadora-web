import React from "react";

const Key = ({onKeyClick, symbol}) => {
    return (
        <button onClick={() => onKeyClick(symbol)}>{symbol}</button>
    )
}

export default Key