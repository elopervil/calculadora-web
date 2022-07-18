import React from "react";

const ResultScreen = (props) => {
    return (
        <div>
            <form>
                <input type="text" value={props.result}/>
            </form>
        </div>
    );
}

export default ResultScreen