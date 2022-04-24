import React from "react";
import style from "./style";

import { Skeleton } from 'antd'
import { HeartOutlined, LikeOutlined, FieldNumberOutlined } from '@ant-design/icons';
import SkeletonImage from "antd/lib/skeleton/Image";

const LoadingContent = () => {
    const { 
        topContainer, 
        coverImage, 
        collectionButton, 
        collectionListSpan, 
        collectionContainer, 
        collectionLink,
        middleContainer, 
        leftContainer,
    } = style

    return (
        <>
            <span className={collectionButton}>
                <HeartOutlined />
            </span>
            <div className={topContainer}>
                <div className="w-1/2 p-4">
                    <Skeleton.Input active={true} size={"large"} />
                </div>
                <div className="w-1/2 flex">
                    <div className="w-1/2 text-center p-4">
                        <span className="text-4xl text-green-400"><FieldNumberOutlined /></span>
                        <p level={5}>SCORE</p>
                        <Skeleton.Input active={true} size={"small"} />
                    </div>
                    <div className="w-1/2 text-center p-4">
                        <span className="text-4xl text-yellow-400"><LikeOutlined /></span>
                        <p level={5}>POPULARITY</p>
                        <Skeleton.Input active={true} size={"small"} />
                    </div>
                </div>
            </div>
            <div className={collectionContainer}>
                <p level={5}>Collection</p>
                <Skeleton.Input active={true} size={"small"} className="mx-2" />
                <Skeleton.Input active={true} size={"small"} className="mx-2" />
                <Skeleton.Input active={true} size={"small"} className="mx-2" />
                <Skeleton.Input active={true} size={"small"} className="mx-2" />
                <Skeleton.Input active={true} size={"small"} className="mx-2" />
            </div>
            <div className={middleContainer}>

                <div className={leftContainer}>
                    <Skeleton.Image />
                    <div style={{margin: "8px"}}>
                        <Skeleton.Input active={true} size={"small"} className="my-2" /><br />
                        <Skeleton.Input active={true} size={"small"} className="my-2" /><br />
                        <Skeleton.Input active={true} size={"small"} className="my-2" /><br />
                        <Skeleton.Input active={true} size={"small"} className="my-2" /><br />
                        <Skeleton.Input active={true} size={"small"} className="my-2" /><br />
                    </div>
                </div>

                <div style={{width: "70%", marginLeft: "4px"}}>
                    <div style={{width: "100%", backgroundColor: "white", padding: "10px", borderRadius: "5px"}}>
                        <Skeleton />
                    </div>
                    <div style={{width: "100%", backgroundColor: "white", padding: "10px", borderRadius: "5px", marginTop: "5px", display: "flex", flexWrap: "wrap"}}>
                        {Array.from({ length: 12 }, (_, i) =>
                            <div className="flex flex-wrap w-1/4 p-4">
                                <Skeleton.Avatar active={true} size={"small"} shape={"circle"} />
                                <Skeleton.Input active={true} size={"small"} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingContent;