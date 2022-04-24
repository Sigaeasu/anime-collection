import React, {useState, useEffect, useRef} from "react";
import { 
    Button,
    Typography
} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import style from './style'

import {
    Link,
} from "react-router-dom";

import CollectionModal from "../../components/Modal/CollectionModal";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";

export default function AnimeCollections() {
    const { Title } = Typography
    const { baseContainer, buttonStyle, cardContainer, linkContainer, iconContainer, editContainer, deleteContainer } =  style
    const modalRef = useRef();
    const [isCollectionModalVisible, setIsCollectionModalVisible] = useState(false);
    const [isConfirmationModalVisible, setIsConfirmationModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState("")
    const [action, setAction] = useState("")
    const [item, setItem] = useState("")
    const [collection, setCollection] = useState([])

    const showCollectionModal = () => {
        setModalTitle("Add New Collection")
        setAction("create")
        setIsCollectionModalVisible(true)
    };

    const showConfirmationModal = () => {
        setAction("delete")
        setIsConfirmationModalVisible(true)
    };

    const closeCollectionModal = () => {
        setIsCollectionModalVisible(false)
        setModalTitle("")
        setAction("")
        setCollection(JSON.parse(localStorage.getItem("collection")))
        modalRef.current.resetInput(null)
        modalRef.current.oldName(null)
    }

    const closeConfirmationModal = () => {
        setIsConfirmationModalVisible(false)
        setModalTitle("")
        setAction("")
        setItem("")
        setCollection(JSON.parse(localStorage.getItem("collection")))
    }
    
    useEffect(() => {
      setCollection(JSON.parse(localStorage.getItem("collection")))
    }, [])
    
    function handleEdit(name) {
        setModalTitle("Edit Collection")
        setAction("edit")
        modalRef.current.resetInput(name)
        modalRef.current.oldName(name)
        setIsCollectionModalVisible(true)
    }
    
    function handleDelete(name) {
        setModalTitle("Delete Collection")
        setItem(name)
        showConfirmationModal()
    }

    return (
        <>
            <div className="mb-12">
                <button 
                    onClick={showCollectionModal} 
                    className={buttonStyle}
                >
                    Create Collection
                </button>
            </div>
            <div className="flex flex-wrap">
                {
                    collection && (
                        collection.map((e) => {
                            return (
                                    <div className={baseContainer} key={e.name}>
                                        <div className={cardContainer}>
                                            <Link 
                                                to={`/collections/${e.name}`}
                                                className={linkContainer}
                                            >
                                                <Title level={5}>{e.name}</Title> 
                                            </Link>
                                            <div className={iconContainer}>
                                                <span 
                                                    className={editContainer}
                                                    onClick={() => handleEdit(e.name)}
                                                ><EditOutlined /></span>
                                                <span 
                                                    className={deleteContainer}
                                                    onClick={() => handleDelete(e.name)}
                                                ><DeleteOutlined /></span>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })
                    )
                }
            </div>
            <CollectionModal 
                title={modalTitle}
                action={action}
                visible={isCollectionModalVisible} 
                closeModal={closeCollectionModal} 
                ref={modalRef} 
            />
            <ConfirmationModal 
                title={modalTitle}
                item={item}
                action={action}
                visible={isConfirmationModalVisible} 
                closeModal={closeConfirmationModal} 
            />
        </>
    )
}