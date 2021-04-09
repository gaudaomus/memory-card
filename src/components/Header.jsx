import React from "react";

const Header = (props) => {
    return(
        <div className="Header">
            <button onClick = {props.reset}>Reset</button>
            Score: {props.score}<br/>
            High Score: {props.highScore}
        </div>
    );
};

export default Header;