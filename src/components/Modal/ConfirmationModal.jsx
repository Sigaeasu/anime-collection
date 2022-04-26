import React, {useContext} from "react"
import { 
    Modal
} from 'antd';
import './index.scss'
import toast from "react-hot-toast";

import { CollectionContext } from "../Base"

const ConfirmationModal = (props) => {
    const {collection, updateCollection} = useContext(CollectionContext);
    
    function deleteCollection() {
        // let collection = JSON.parse(localStorage.getItem("collection"))
        let arr = []
        collection.map((e) => {
            if (e.name !== props.item) {
                arr.push(e)
            }
        })
        localStorage.setItem("collection", JSON.stringify(arr))
        props.closeModal()
        toast.success("Collection has been deleted")
    }
    
    function deleteAnime() {
        let arr = []
        collection.map((e) => {
            if (e.name === props.collection.name) {
                console.log(props.item.id);
                let list = e.list
                arr.push({
                    name: e.name,
                    list: list.filter((e) => parseInt(e) !== props.item.id)
                })
            } else {
                arr.push(e)
            }
        })
        localStorage.setItem("collection", JSON.stringify(arr))
        updateCollection()
        props.closeModal()
        toast.success("Collection has been deleted")
    }

    return (
        <>
            <Modal 
                title={" "}
                visible={props.visible}
                onOk={props.action === "removeAnime" ? deleteAnime : deleteCollection}
                onCancel={props.closeModal}
            >
                Are you sure to delete <b>{props.action === "removeAnime" ? props.item.title.romaji : props.item}</b> ?    
            </Modal>
        </>
    )
}

export default ConfirmationModal