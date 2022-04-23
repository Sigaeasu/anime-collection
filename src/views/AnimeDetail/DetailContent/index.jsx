import React, {useState, useEffect, forwardRef, useImperativeHandle} from "react";
import style from "./style";

import { 
    Typography,
} from 'antd';

import {
    Link,
} from "react-router-dom";

const DetailContent = forwardRef((props, ref) => {
    const { Title } = Typography;
    const { linkStyle } =  style
    const anime = props.anime
    const characters = anime.characters.nodes
    const { topContainer, coverImage, collectionButton, collectionListSpan } = style

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
            <button className={collectionButton} onClick={props.add}>test</button>
            <div className={topContainer}>
                <div className="w-1/2 p-4">
                    <Title>{anime.title.romaji}</Title>
                </div>
                <div className="w-1/2 flex">
                    <div className="w-1/2 text-center p-4">
                        <Title level={5}>SCORE</Title>
                        <p>{anime.averageScore}</p>
                    </div>
                    <div className="w-1/2 text-center p-4">
                        <Title level={5}>POPULARITY</Title>
                        <p>{anime.popularity}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-full p-2">
            <Title level={5}>Collection</Title>
            {
                collection.map((e) => {return(
                    <Link 
                        to={`/collections/${e}`} 
                        className={linkStyle} 
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
            <div className="flex">
                <div className="w-1/4">
                    <img src={anime.coverImage.large} alt="" className={coverImage} />
                </div>
                <div className="w-3/4">
                    {anime.description}
                </div>
            </div>
            <div className="flex">
                <div className="w-1/4 pt-4 pr-4">
                    <span>Duration : {anime.duration} minutes</span><br/>
                    <span>Episodes : {anime.episodes}</span><br/>
                    <span>Genres : {anime.genres.join(", ")}</span><br/>
                    <span>Season : {anime.season}</span><br/>
                    <span>Status : {anime.status}</span><br/>
                </div>
                <div className="w-3/4 flex flex-wrap">
                    {
                        characters.map((e) => (
                            <div className="flex w-1/4 p-4" key={e.name.full}>
                                <img src={e.image.medium} alt="" style={{width: "50px", height: "50px"}} />
                                <p>{e.name.full}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
})

export default DetailContent;