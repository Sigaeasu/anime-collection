import React, {useState, useContext} from "react";
import style from './style'

import { Card } from 'antd'
import { HeartOutlined, LikeOutlined, VideoCameraOutlined, DeleteOutlined } from '@ant-design/icons';

import {
    Link,
} from "react-router-dom";

import { CollectionContext } from "../Base"
import ConfirmationModal from "../Modal/ConfirmationModal";

const AnimeCard = (props) => {
    const { cardStyle, deleteStyle } = style
    const { Meta } = Card;
    const {collection, updateCollection} = useContext(CollectionContext);
    const [selectedCollection, setSelectedCollection] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    function removeFromCollection() {
        setSelectedCollection(collection.find((e) => e.name === props.collection))
        setIsVisible(true)
    }

    function closeModal() {
        setIsVisible(false)
    }

    return (
        <>
            <Card
                cover={
                    <Link 
                        to={`/detail/${props.media.id}`} 
                        style={{overflow: "hidden", height: "200px", width: "100%"}}
                    >
                        <img
                            alt={props.media.title.romaji}
                            src={props.media.coverImage.extraLarge}
                            style={{ height: "100%", minWidth: "100%", objectFit: "cover" }}
                        />
                    </Link>
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
                extra={props.type === "collection" ? 
                        <DeleteOutlined 
                            className={deleteStyle} 
                            value={props.media.id}
                            onClick={removeFromCollection} 
                        /> : false}
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
            <ConfirmationModal 
                collection={selectedCollection}
                item={props.media}
                action={"removeAnime"}
                visible={isVisible} 
                closeModal={closeModal} 
            />
        </>
    )
}

export default AnimeCard;