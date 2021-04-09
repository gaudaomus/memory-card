import React from "react";

const Card = (props) => {
    return(
        <div>
            <img src={props.cardObject.picture} alt={props.cardObject.description} />
            Description: {props.cardObject.description}
        </div>
    );
};

export default Card;