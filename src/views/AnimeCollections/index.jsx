import React, {useState, useEffect, useRef} from "react";
import { 
    Button,
    Typography
} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import CollectionModal from "../../components/Modal/CollectionModal";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";

export default function AnimeCollections() {
    const { Title } = Typography
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
            <div>
                <Button type="primary" onClick={showCollectionModal}>
                    Create Collection
                </Button>
            </div>
            <div className="flex flex-wrap">
                {
                    collection && (
                        collection.map((e) => {
                            return (
                                <div key={e.name} className="w-1/4 border-2 border-gray-200 p-2 flex">
                                    <Title level={5} className="w-full">{e.name}</Title>
                                    <span 
                                        className="text-yellow-300" 
                                        onClick={() => handleEdit(e.name)}
                                    ><EditOutlined /></span>
                                    <span 
                                        className="text-red-300" 
                                        onClick={() => handleDelete(e.name)}
                                    ><DeleteOutlined /></span>
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