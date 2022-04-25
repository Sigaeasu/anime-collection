import React from "react"
import style from "./style.js"
import { useQuery } from "@apollo/react-hooks"
import { GET_ANIME_LIST_QUERY } from "../../../utils/getAnimeList"

import { 
    Typography,
    Skeleton,
    Avatar
} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import {
    Link,
} from "react-router-dom";

const CollectionCard = (props) => {
    const { Title } = Typography
    const {
        baseContainer,
        cardContainer,
        linkContainer,
        iconContainer,
        editContainer,
        deleteContainer,
        avatarContainer
    } = style

    const { data, loading, error } = useQuery(GET_ANIME_LIST_QUERY, {
        variables: {
            id_in: props.collection.list,
        }
    })

    function handleAnimeSneakPeak() {
        if (loading) {
            return (
                <>
                    <Skeleton.Avatar active={true} size={"small"} shape={"circle"} />
                    <Skeleton.Avatar active={true} size={"small"} shape={"circle"} />
                    <Skeleton.Avatar active={true} size={"small"} shape={"circle"} />
                </>
            )
        } else {
            const anime = data?.Page.media
            return (
                <>
                    {anime[0] && <Avatar src={anime[0].coverImage.medium} />}
                    {anime[1] && <Avatar src={anime[1].coverImage.medium} />}
                    {anime[2] && <Avatar src={anime[2].coverImage.medium} />}
                    {!anime[0] && !anime[1] && !anime[2] && <p>Empty</p>}
                </>
            )
        }
    }

    return (
        <>
            <div className={baseContainer} key={props.collection.name}>
                <div className={cardContainer}>
                    <Link 
                        to={`/collections/${props.collection.name}`}
                        className={linkContainer}
                    >
                        <Title level={5}>{props.collection.name}</Title> 
                    </Link>
                    <div className={iconContainer}>
                        <span 
                            className={editContainer}
                            onClick={() => props.handleEdit(props.collection.name)}
                        ><EditOutlined /></span>
                        <span 
                            className={deleteContainer}
                            onClick={() => props.handleDelete(props.collection.name)}
                        ><DeleteOutlined /></span>
                    </div>
                    <div className={avatarContainer}>
                        {handleAnimeSneakPeak()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionCard