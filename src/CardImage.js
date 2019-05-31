import React from 'react';

import './CardImage.scss';

function CardImage(props) {
    return (
        <img
            src={props.img}
            className={props.name}
            alt={props.title}
        />
    );
}

export default CardImage;