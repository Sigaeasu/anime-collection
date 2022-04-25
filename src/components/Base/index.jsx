import React, {useState, useEffect, createContext} from 'react';
import './index.scss'

import Navbar from '../Navbar';
import Content from '../Content';

import { Layout } from 'antd';

export const CollectionContext = createContext();

export default function Base() {
    const { Footer } = Layout;

    const [collapsed, setCollapsed] = useState(false)
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        setCollection(JSON.parse(localStorage.getItem("collection")))
    }, [])   
    
    function updateCollection() {
        setCollection(JSON.parse(localStorage.getItem("collection")))
    }

    function toggleSidebar() {
        setCollapsed(!collapsed)
    };

    return (
        <CollectionContext.Provider value={{collection, updateCollection}}>
            <Layout id="base">
                <Layout id="baseContent">
                    <Navbar onCollapsed={toggleSidebar} />
                    <Content id="content" />
                    <Footer style={{ textAlign: 'center', backgroundColor: "transparent", color: "#9798A6" }}>Ant Design ©2022 Created by Sigaeasu</Footer>
                </Layout>
            </Layout>
        </CollectionContext.Provider>
    );
}