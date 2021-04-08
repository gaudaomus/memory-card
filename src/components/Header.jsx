import React from "react";

const Header = (props) => {
    return(
        <div>
            Score: {props.score}
            High Score: {props.highScore}
        </div>
    );
};

export default Header;