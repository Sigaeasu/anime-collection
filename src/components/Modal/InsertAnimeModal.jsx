import React, {useState, useEffect, forwardRef, useImperativeHandle} from "react"
import { 
    Modal,
    Select
} from 'antd';
import "./index.scss"
import toast from "react-hot-toast";

const InsertAnimeModal = forwardRef((props, ref) => {
    const { Option } = Select;
    const [collection, setCollection] = useState([])
    const [selectedCollection, setSelectedCollection] = useState([])

    useImperativeHandle(ref, () => ({

        handleSelectedCollection(value) {
            setSelectedCollection(value);
        },

        fetchSelectedCollection() {
            let collection = JSON.parse(localStorage.getItem("collection"))
            let arr = []
            collection.map((e) => {
                let list = e.list
                if (list.find((el) => el === props.item)) {
                    arr.push(e.name)
                }
            })
            setSelectedCollection(arr)
        }
    
    }))

    function addToCollection() {
        let collection = JSON.parse(localStorage.getItem("collection"))
        let arr = []

        selectedCollection.map((e) => {
            collection.map((el) => {
                if (el.name === e) {
                    const list = el.list
                    if (!list.find((i) => i === props.item)) {
                        list.push(props.item)
                    }

                    if (!arr.find((i) => i.name === el.name)) {
                        arr.push({
                            name: el.name,
                            list: list
                        })
                    }
                } else {
                    if (!arr.find((i) => i.name === el.name)) {
                        arr.push(el)
                    }
                }
            })
        })

        localStorage.setItem("collection", JSON.stringify(arr))
        props.closeModal()
        toast.success("Anime has been added to collection !")
    }

    function handleDeselect(value) {
        let collection = JSON.parse(localStorage.getItem("collection"))
        let arr = []

        collection.map((e) => {
            if (e.name === value) {
                let list = e.list
                let filteredList = list.filter((el) => el !== props.item)
                arr.push({
                    name: e.name,
                    list: filteredList
                })
            } else {
                arr.push(e)
            }
        })
        localStorage.setItem("collection", JSON.stringify(arr))
        toast.success('"' + props.anime.title.romaji + '" has been removed from "' + value + '" collection')
    }

    useEffect(() => {
        setCollection(JSON.parse(localStorage.getItem("collection")))
    }, [])

    function handleChange(value) {
        setSelectedCollection(value)
    }

    return (
        <>
            <Modal 
                title={'Insert "' + props.anime.title.romaji + '" To Collection'}
                visible={props.visible}
                onOk={addToCollection}
                onCancel={props.closeModal}
            >
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select collection"
                    value={selectedCollection}
                    onChange={handleChange}
                    onDeselect={handleDeselect}
                >
                    {
                        collection &&
                        collection.map((e) => {
                            return (
                                <Option key={e.name} value={e.name}>{e.name}</Option>
                            )
                        })
                    }
                </Select> 
            </Modal>
        </>
    )
})

export default InsertAnimeModal