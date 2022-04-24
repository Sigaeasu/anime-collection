import React, {useState} from "react";
import { useQuery } from "@apollo/react-hooks"
import { GET_ANIME_LIST_QUERY } from "../../utils/getAnimeList"
import style from './style'

import { 
    Pagination,
} from 'antd';

import {
    Link,
} from "react-router-dom";

import AnimeCard from "../../components/Card";
import Loading from "../../components/Loading";

export default function AnimeList() {
    const { linkStyle } =  style
    const [variables, setVariables] = useState({
        page: 1,
        perPage: 10
    })

    const { data, loading, error } = useQuery(GET_ANIME_LIST_QUERY, {
        variables: variables
    })

    const handlePagination = (newPage, newPageSize) => {
        setVariables({
            page: newPage,
            perPage: newPageSize
        })
    }

    if (loading) {
        return (
            <>
                <div className="flex flex-wrap w-full h-full">
                    {Array.from({ length: 10 }, (_, i) =>
                        <div className={linkStyle}>
                            <Loading />
                        </div>
                    )}
                </div>

                <Pagination style={{textAlign: 'center', marginTop: 40}} />
            </>
        )
    } else {
        let animeList = data?.Page.media
        let paginationInfo = data?.Page.pageInfo
        return (
            <>
                <div className="flex flex-wrap w-full h-full">
                    {
                        animeList.map((e) => (
                            <Link to={`/detail/${e.id}`} className={linkStyle} key={e.id}>
                                <AnimeCard media={e} />
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