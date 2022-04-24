import React, {useState, useRef, useEffect} from "react";
import { useQuery } from "@apollo/react-hooks"
import { GET_ANIME_DETAIL_QUERY } from "../../utils/getAnimeList"
import { useParams } from "react-router-dom";

import DetailContent from "./DetailContent";
import InsertAnimeModal from "../../components/Modal/InsertAnimeModal";
import LoadingContent from "./LoadingContent"

export default function AnimeDetail() {
    const { id } = useParams();
    const modalRef = useRef();
    const contentRef = useRef();
    const [isVisible, setIsVisible] = useState(false)

    const { data, loading, error } = useQuery(GET_ANIME_DETAIL_QUERY, {
        variables: {
            id: id
        }
    })
    

    function showModal() {
        modalRef.current.fetchSelectedCollection()
        setIsVisible(true)
    }

    function closeModal() {
        modalRef.current.handleSelectedCollection([])
        contentRef.current.refetchCollection()
        setIsVisible(false)
    }

    if (loading) {
        return (<><LoadingContent /></>)
    } else {
        const anime = data?.Media
        return (
            <>
                <DetailContent 
                    anime={anime} 
                    add={showModal} 
                    ref={contentRef}
                />
                <InsertAnimeModal 
                    visible={isVisible}
                    closeModal={closeModal}
                    anime={anime}
                    item={id}
                    ref={modalRef}
                />
            </>
        )
    }
}