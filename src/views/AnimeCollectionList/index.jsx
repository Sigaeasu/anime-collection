import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks"
import { GET_ANIME_LIST_QUERY } from "../../utils/getAnimeList"
import style from './style'

import { 
    Pagination,
} from 'antd';

import {
    Link,
} from "react-router-dom";

import Card from "./Card";

const AnimeCollectionList = () => {
    const { name } = useParams();
    const { linkStyle } =  style
    const [animeList, setAnimeList] = useState([])
    const [variables, setVariables] = useState({
        page: 1,
        perPage: 10
    })

    useEffect(() => {
        fetchAnimeList()
    }, [])

    const { data, loading, error, refetch, networkStatus } = useQuery(GET_ANIME_LIST_QUERY, {
        variables: {
            id_in: animeList,
            page: variables.page,
            perPage: variables.perPage,
            notifyOnNetworkStatusChange: true,
        }
    })

    const fetchAnimeList = async () => {
        const collectionList = await fetchCollectionList()
        setAnimeList(collectionList.list)
    }

    const fetchCollectionList = () => {
        const collection = JSON.parse(localStorage.getItem("collection"))
        return collection.find(e => e.name === name)
    }

    const handlePagination = (newPage, newPageSize) => {
        setVariables({
            page: newPage,
            perPage: newPageSize
        })
    }

    if (loading) {
        return (<>loading</>)
    } else {
        let animeList = data?.Page.media
        let paginationInfo = data?.Page.pageInfo

        if (animeList.length === 0) {
            return (<p>NOT FOUND 404</p>)
        } else {
            return (
                <>
                    <div className="flex flex-wrap w-full h-full">
                        {
                            animeList.map((e) => (
                                <Link 
                                    to={`/detail/${e.id}`} 
                                    className={linkStyle} 
                                    key={e.id}
                                >
                                    <Card media={e} />
                                </Link>
                            ))
                        }
                    </div>
                    
                    <Pagination  
                        current={paginationInfo.currentPage} 
                        total={paginationInfo.total}
                        style={{textAlign: 'center', marginTop: 40}}
                        onChange={handlePagination}
                    />
                </>
            )
        }
    }
}

export default AnimeCollectionList