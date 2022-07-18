import React from "react";
import Key from "./Key";

const number = [7, 8, 9, "/", 4, 5, 6, "x", 1, 2, 3, "-", 0, ".", "=", "+", "DEL"]

const Keyboard = ()=>{
    return(
        <div>
            {number.map((elem, index) => <Key key={index} symbol={elem}/>)}
        </div>
    )
}

export default Keyboard