import React from "react";
import style from './style'

const Card = (props) => {
    const { cardStyle } = style

    return (
        <>
            <div 
                className={cardStyle}
            >
                <img src={props.media.coverImage.medium} alt="" />
                <p>{props.media.title.romaji}</p>
                <p>{props.media.episodes} episodes</p>
                <p>{props.media.duration} minutes</p>
                <p>{props.media.genres} minutes</p>
            </div>
        </>
    )
}

export default Card;