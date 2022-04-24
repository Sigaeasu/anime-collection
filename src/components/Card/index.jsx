import React from "react";
import style from './style'

import { Card } from 'antd'
import { HeartOutlined, LikeOutlined, VideoCameraOutlined } from '@ant-design/icons';

const AnimeCard = (props) => {
    const { cardStyle } = style
    const { Meta } = Card;

    return (
        <>
            <Card
                cover={
                    <div style={{overflow: "hidden", height: "200px", width: "100%"}}>
                        <img
                            alt={props.media.title.romaji}
                            src={props.media.coverImage.extraLarge}
                            style={{ height: "100%", minWidth: "100%", objectFit: "cover" }}
                        />
                    </div>
                }
                actions={[
                    <div>
                        <div style={{color: "green"}}><LikeOutlined key="averageScore" /></div>
                        <p style={{color: "#8a8a8a"}}>{props.media.averageScore}</p>
                    </div>,
                    <div>
                        <div style={{color: "red"}}><HeartOutlined key="popularity" /></div>
                        <p style={{color: "#8a8a8a"}}>{props.media.popularity}</p>
                    </div>,
                    <div>
                        <div style={{color: "blue"}}><VideoCameraOutlined key="episodes" /></div>
                        <p style={{color: "#8a8a8a"}}>{props.media.episodes}</p>
                    </div>,
                ]}
                className={cardStyle}
            >
                <Meta
                    title={props.media.title.romaji}
                    description={props.media.description}
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                />
            </Card>
        </>
    )
}

export default AnimeCard;