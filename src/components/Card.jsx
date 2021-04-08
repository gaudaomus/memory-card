import React from "react";

const Card = (props) => {
    return(
        <div>
            Placeholder: {props.item.picture}
            Description: {props.item.description}
        </div>
    );
};

export default Card;