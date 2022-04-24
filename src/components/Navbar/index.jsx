import React from "react";
import './index.scss'

import {
    Link,
} from "react-router-dom";

import { Layout, Menu } from 'antd';
import { HomeOutlined, GroupOutlined } from '@ant-design/icons';

export default function Navbar(props) {
    const { Header } = Layout;

    const pathname = () => {
        return window.location.pathname
    }

    return (
        <>
            <Header id="navbar">
                <Menu 
                    mode="horizontal" 
                    defaultSelectedKeys={pathname} 
                    style={{
                        backgroundColor: "transparent",
                        borderBottom: "none",
                    }}
                >
                    <Menu.Item 
                        key="/home" 
                        icon={<HomeOutlined />} 
                        id="item"
                    >
                        <Link to={`/home`} id="itemLink">
                            Home
                        </Link>
                    </Menu.Item> 
                    <Menu.Item 
                        key="/collections" 
                        icon={<GroupOutlined />}
                        id="item"
                    >
                        <Link to={`/collections`} id="itemLink">
                            Collections
                        </Link>
                    </Menu.Item> 
                </Menu>
            </Header>
        </>
    );
};