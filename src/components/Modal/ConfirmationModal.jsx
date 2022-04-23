import React from "react"
import { 
    Modal
} from 'antd';
import toast from "react-hot-toast";

const ConfirmationModal = (props) => {
    function deleteCollection() {
        let collection = JSON.parse(localStorage.getItem("collection"))
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

    return (
        <>
            <Modal 
                title={props.title}
                visible={props.visible}
                onOk={deleteCollection}
                onCancel={props.closeModal}
            >
                Are you sure to delete <b>{props.item}</b> ?    
            </Modal>
        </>
    )
}

export default ConfirmationModal