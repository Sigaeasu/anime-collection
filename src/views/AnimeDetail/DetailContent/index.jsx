import React, {useState, useEffect, forwardRef, useImperativeHandle} from "react";
import style from "./style";

import { 
    Typography,
} from 'antd';
import { HeartOutlined, LikeOutlined, FieldNumberOutlined } from '@ant-design/icons';

import {
    Link,
} from "react-router-dom";

const DetailContent = forwardRef((props, ref) => {
    const { Title } = Typography;
    const anime = props.anime
    const characters = anime.characters.nodes
    const { 
        headerContainer, 
        titleContainer,
        scoreContainer,
        coverImage, 
        collectionButton, 
        collectionListSpan, 
        collectionContainer, 
        collectionLink,
        bodyContainer, 
        leftContainer,
        rightContainer,
        descriptionContainer,
        charactersContainer,
        charactersSpan
    } = style

    const [collection, setCollection] = useState([])

    useEffect(() => {
        getCollection()
    }, [])    

    function getCollection() {
        let coll = JSON.parse(localStorage.getItem("collection"))
        let arr = []
        coll.map((e) => {
            let list = e.list
            if (list.find((el) => parseInt(el) === props.anime.id)) {
                arr.push(e.name)
            }
        })
        setCollection(arr)
    }

    useImperativeHandle(ref, () => ({

        refetchCollection() {
            getCollection();
        }
    
    }))

    return (
        <>
            <span className={collectionButton} onClick={props.add}>
                <HeartOutlined />
            </span>
            <div className={headerContainer}>
                <div className={titleContainer}>
                    <Title>{anime.title.romaji}</Title>
                </div>
                <div className={scoreContainer}>
                    <div className="w-1/2 text-center p-4">
                        <span className="text-4xl text-green-400"><FieldNumberOutlined /></span>
                        <Title level={5}>SCORE</Title>
                        <p>{anime.averageScore}</p>
                    </div>
                    <div className="w-1/2 text-center p-4">
                        <span className="text-4xl text-yellow-400"><LikeOutlined /></span>
                        <Title level={5}>POPULARITY</Title>
                        <p>{anime.popularity}</p>
                    </div>
                </div>
            </div>
            <div className={collectionContainer}>
                <Title level={5}>Collection</Title>
                {
                    collection.map((e) => {return(
                        <Link 
                            to={`/collections/${e}`} 
                            className={collectionLink} 
                            key={e.id}
                        >
                            <span 
                                key={e} 
                                className={collectionListSpan}
                            >{e}</span>
                        </Link>
                    )})
                }
            </div>
            <div className={bodyContainer}>

                <div className={leftContainer}>
                    <img src={anime.coverImage.extraLarge} alt="" className={coverImage} />
                    <div style={{margin: "8px"}}>
                        <div><span className="bg-violet-200 p-1 rounded-lg">Duration</span> {anime.duration} minutes</div><br />
                        <div><span className="bg-violet-200 p-1 rounded-lg">Episodes</span> {anime.episodes}</div><br />
                        <div><span className="bg-violet-200 p-1 rounded-lg">Genres</span> {anime.genres.join(", ")}</div><br />
                        <div><span className="bg-violet-200 p-1 rounded-lg">Season</span> {anime.season}</div><br />
                        <div><span className="bg-violet-200 p-1 rounded-lg">Status</span> {anime.status}</div>
                    </div>
                </div>

                <div className={rightContainer}>
                    <div className={descriptionContainer}>
                        <Title level={3} className="w-ful   l">Description</Title>
                        {anime.description}
                    </div>
                    <div className={charactersContainer}>
                        <Title level={3} className="w-full">Characters</Title>
                        {
                            characters.map((e) => (
                                <div className={charactersSpan} key={e.name.full}>
                                    <img src={e.image.medium} alt="" style={{width: "50px", height: "50px", borderRadius: "50%"}} />
                                    <p>{e.name.full}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
})

export default DetailContent;