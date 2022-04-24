import React, {useState} from 'react';
import './index.scss'

import Navbar from '../Navbar';
import Content from '../Content';

import { Layout } from 'antd';

export default function Base() {
    const { Footer } = Layout;

    const [collapsed, setCollapsed] = useState(false)

    function toggleSidebar() {
        setCollapsed(!collapsed)
    };

    return (
        <Layout id="base">
            <Layout id="baseContent">
                <Navbar onCollapsed={toggleSidebar} />
                <Content id="content" />
                <Footer style={{ textAlign: 'center', backgroundColor: "transparent", color: "#9798A6" }}>Ant Design ©2022 Created by Sigaeasu</Footer>
            </Layout>
        </Layout>
    );
}