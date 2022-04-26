import React, {useState, useEffect, useRef, useContext} from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks"
import { GET_ANIME_LIST_QUERY } from "../../utils/getAnimeList"
import { useNavigate } from "react-router-dom";
import style from './style'

import { 
    Typography,
    Pagination,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';

import {
    Link,
} from "react-router-dom";

import AnimeCard from "../../components/Card";
import Loading from "../../components/Loading";
import CollectionModal from "../../components/Modal/CollectionModal";

import { CollectionContext } from "../../components/Base"

const AnimeCollectionList = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const modalRef = useRef();
    const { Title } = Typography;
    const { cardStyle, editContainer } =  style
    const [isVisible, setIsVisible] = useState(false)
    const [animeList, setAnimeList] = useState([])
    const [collectionTitle, setCollectionTitle] = useState("")
    const [variables, setVariables] = useState({
        page: 1,
        perPage: 10
    })
    const {collection, updateCollection} = useContext(CollectionContext);

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
        const coll = JSON.parse(localStorage.getItem("collection"))
        setCollectionTitle(name)
        return coll.find(e => e.name === name)
    }

    const handlePagination = (newPage, newPageSize) => {
        setVariables({
            page: newPage,
            perPage: newPageSize
        })
    }

    function handleEdit() {
        modalRef.current.resetInput(name)
        modalRef.current.oldName(name)
        setIsVisible(true)
    }

    const closeModal = () => {
        setIsVisible(false)

        updateCollection()
        
        modalRef.current.resetInput(null)
        modalRef.current.oldName(null)

        navigate("/collections");
    }

    if (loading) {
        return (
            <>
                <div className="flex flex-wrap w-full h-full">
                    {Array.from({ length: 10 }, (_, i) =>
                        <div className={cardStyle} key={i}>
                            <Loading />
                        </div>
                    )}
                </div>
            </>
        )
    } else {
        let animeList = data?.Page.media
        let paginationInfo = data?.Page.pageInfo

        if (animeList.length === 0) {
            return (<Title style={{color: "white"}}>NO ANIME ADDED TO THE COLLECTION</Title>)
        } else {
            return (
                <>
                    <div className="w-full flex flex-wrap">
                        <Title style={{color: "white"}}>{collectionTitle}</Title>
                        <span 
                            className={editContainer}
                            onClick={() => handleEdit(name)}
                        ><EditOutlined /></span>
                    </div>
                    <div className="flex flex-wrap w-full h-full">
                        {
                            animeList.map((e) => (
                                <Link to={`/detail/${e.id}`} className={cardStyle} key={e.id}>
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
                    <CollectionModal
                        title={"Edit Collection"}
                        action={"edit"}
                        visible={isVisible} 
                        closeModal={closeModal} 
                        ref={modalRef} 
                    />
                </>
            )
        }
    }
}

export default AnimeCollectionList