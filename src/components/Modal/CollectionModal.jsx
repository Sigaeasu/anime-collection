import React, {useState, forwardRef, useImperativeHandle} from "react";
import { 
    Modal, 
    Input
} from 'antd';
import "./index.scss"
import toast from "react-hot-toast";

const CollectionModal = forwardRef((props, ref) => {
    const [collectionName, setCollectionName] = useState(null)
    const [oldCollectionName, setOldCollectionName] = useState(null)

    useImperativeHandle(ref, () => ({

        resetInput(value) {
            setCollectionName(value);
        },

        oldName(value) {
            setOldCollectionName(value)
        }
    
    }))
  
    const createCollection = () => {
        if (collectionName === null || collectionName === '') {
            toast.error("Please input new collection's name !")
        } else {    
            let collection = JSON.parse(localStorage.getItem("collection"))

            let arr = []
            if (collection !== null) {
                collection.map(e => {
                    arr.push(e)
                })

                if (!collection.find((el) => el.name === collectionName)) {
                    arr.push({
                        name: collectionName,
                        list: []
                    })
                    localStorage.setItem("collection", JSON.stringify(arr))
                    props.closeModal()
                    toast.success("New collection's name has been added !")
                } else {
                    toast.error("Similar collection has been added !")
                }
            } else {
                arr.push({
                    name: collectionName,
                    list: []
                })
                localStorage.setItem("collection", JSON.stringify(arr))
                props.closeModal()
            }
        }
    }

    const editCollection = () => {
        if (collectionName === null || collectionName === '') {
            toast.error("Please input new collection's name !")
        } else {
            let collection = JSON.parse(localStorage.getItem("collection"))
            let arr = []

            if (!collection.find((el) => el.name === collectionName)) {
                collection.map((e) => {
                    if(e.name === oldCollectionName) {
                        arr.push({
                            name: collectionName,
                            list: e.list
                        })
                    } else {
                        arr.push(e)
                    }
                })
                localStorage.setItem("collection", JSON.stringify(arr))
                props.closeModal()
                toast.success("Collection's name has been updated !")
            } else {
                toast.error("Similar collection exists !")
            }
        }
    }

    function handleCollectionNameInput(e) {
        setCollectionName(e.target.value)
    }

    return (
        <>
            <Modal 
                title={" "}
                visible={props.visible} 
                onOk={props.action === "create" ? createCollection : editCollection} 
                onCancel={props.closeModal}
            >
                <Input 
                    placeholder="Create Collection" 
                    onChange={handleCollectionNameInput}
                    value={collectionName}
                    bordered={false}
                    style={{fontSize: "24px", borderBottom: "1px solid #c7c7c7"}}
                />
            </Modal>
        </>
    )
})

export default CollectionModal;