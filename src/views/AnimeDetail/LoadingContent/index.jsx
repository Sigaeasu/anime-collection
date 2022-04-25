import React from "react";
import style from "./style";

import { Skeleton, Typography } from 'antd'
import { HeartOutlined, LikeOutlined, FieldNumberOutlined } from '@ant-design/icons';

const LoadingContent = () => {
    const {Title} = Typography
    const { 
        headerContainer, 
        titleContainer,
        scoreContainer,
        coverImage, 
        collectionButton, 
        collectionListSpan, 
        collectionContainer, 
        collectionLink,
        bodyContainer, 
        leftContainer,
        rightContainer,
        descriptionContainer,
        charactersContainer,
        charactersSpan
    } = style

    return (
        <>
            <div className={headerContainer}>
                <div className={titleContainer}>
                    <Skeleton.Input active={true} size={"large"} />
                </div>
                <div className={scoreContainer}>
                    <div className="w-1/2 text-center p-4">
                        <span className="text-4xl text-green-400"><FieldNumberOutlined /></span>
                        <Title level={5}>SCORE</Title>
                        <Skeleton.Input active={true} size={"small"} />
                    </div>
                    <div className="w-1/2 text-center p-4">
                        <span className="text-4xl text-yellow-400"><LikeOutlined /></span>
                        <Title level={5}>POPULARITY</Title>
                        <Skeleton.Input active={true} size={"small"} />
                    </div>
                </div>
            </div>
            <div className={collectionContainer}>
                <Title level={5}>Collection</Title>
                <p level={5}>Collection</p>
                <Skeleton.Input active={true} size={"small"} className="mx-2" />
                <Skeleton.Input active={true} size={"small"} className="mx-2" />
                <Skeleton.Input active={true} size={"small"} className="mx-2" />
                <Skeleton.Input active={true} size={"small"} className="mx-2" />
                <Skeleton.Input active={true} size={"small"} className="mx-2" />
            </div>
            <div className={bodyContainer}>

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

                <div className={rightContainer}>
                    <div className={descriptionContainer}>
                        <Title level={3} className="w-ful   l">Description</Title>
                        <Skeleton />
                    </div>
                    <div className={charactersContainer}>
                        <Title level={3} className="w-full">Characters</Title>
                        {
                            Array.from({ length: 12 }, (_, i) =>
                                <div className={charactersSpan} key={i}>
                                    <Skeleton.Avatar active={true} size={"small"} shape={"circle"} />
                                    <Skeleton.Input active={true} size={"small"} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingContent;