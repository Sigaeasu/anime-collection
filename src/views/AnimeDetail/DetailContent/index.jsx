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
        topContainer, 
        coverImage, 
        collectionButton, 
        collectionListSpan, 
        collectionContainer, 
        collectionLink,
        middleContainer, 
        leftContainer,
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
            <div className={topContainer}>
                <div className="w-1/2 p-4">
                    <Title>{anime.title.romaji}</Title>
                </div>
                <div className="w-1/2 flex">
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
            <div className={middleContainer}>

                <div className={leftContainer}>
                    <img src={anime.coverImage.extraLarge} alt="" className={coverImage} />
                    <div style={{margin: "8px"}}>
                        <span>Duration : {anime.duration} minutes</span><br/>
                        <span>Episodes : {anime.episodes}</span><br/>
                        <span>Genres : {anime.genres.join(", ")}</span><br/>
                        <span>Season : {anime.season}</span><br/>
                        <span>Status : {anime.status}</span><br/>
                    </div>
                </div>

                <div style={{width: "70%", marginLeft: "4px"}}>
                    <div style={{width: "100%", backgroundColor: "white", padding: "10px", borderRadius: "5px"}}>
                        {anime.description}
                    </div>
                    <div style={{width: "100%", backgroundColor: "white", padding: "10px", borderRadius: "5px", marginTop: "5px", display: "flex", flexWrap: "wrap"}}>
                        {
                            characters.map((e) => (
                                <div className="flex w-1/4 p-4" key={e.name.full}>
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