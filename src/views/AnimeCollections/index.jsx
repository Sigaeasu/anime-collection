import React, {useState, useEffect, useRef, useContext} from "react";
import style from './style'

import CollectionModal from "../../components/Modal/CollectionModal";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";
import CollectionCard from "./CollectionCard";

import { CollectionContext } from "../../components/Base"

export default function AnimeCollections() {
    const { buttonStyle } =  style
    const modalRef = useRef();
    const [isCollectionModalVisible, setIsCollectionModalVisible] = useState(false);
    const [isConfirmationModalVisible, setIsConfirmationModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState("")
    const [action, setAction] = useState("")
    const [item, setItem] = useState("")
    const {collection, updateCollection} = useContext(CollectionContext);

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

        updateCollection()
        
        modalRef.current.resetInput(null)
        modalRef.current.oldName(null)
    }

    const closeConfirmationModal = () => {
        setIsConfirmationModalVisible(false)
        setModalTitle("")
        setAction("")
        setItem("")
        updateCollection()
    }
    
    useEffect(() => {
        updateCollection()
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
                                    <CollectionCard 
                                        collection={e}
                                        handleEdit={handleEdit}
                                        handleDelete={handleDelete}
                                    />
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