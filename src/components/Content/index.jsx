import React from "react"
import {
    Routes,
    Route,
} from "react-router-dom";
import { Layout } from 'antd';
import './index.scss'

import AnimeList from '../../views/AnimeList'
import AnimeDetail from '../../views/AnimeDetail'
import AnimeCollections from '../../views/AnimeCollections'
import AnimeCollectionList from '../../views/AnimeCollectionList'

export default function Content() {
    const { Content } = Layout;

    return (
        <>
            <Content id="content">
                <Routes>
                    <Route path="/home" element={<AnimeList />} />
                    <Route path="/detail/:id" element={<AnimeDetail />} />
                    <Route path="/collections" element={<AnimeCollections />} />
                    <Route path="/collections/:name" element={<AnimeCollectionList />} />
                </Routes>
            </Content>
        </>
    );
}