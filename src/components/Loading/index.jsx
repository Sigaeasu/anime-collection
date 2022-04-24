import React from "react"
import { Card, Skeleton } from 'antd'

const Loading = (props) => {
    const { Meta } = Card;

    return (
        <>
            <Card
                cover={
                    <div style={{overflow: "hidden", height: "200px", width: "100%"}}>
                        <Skeleton.Avatar active={true} shape={"square"} style={{ height: "100%", width: "100%"}} />
                    </div>
                }
                actions={[
                    <div>
                        <Skeleton.Avatar active={true} size={"small"} shape={"circle"} />
                    </div>,
                    <div>
                        <Skeleton.Avatar active={true} size={"small"} shape={"circle"} />
                    </div>,
                    <div>
                        <Skeleton.Avatar active={true} size={"small"} shape={"circle"} />
                    </div>,
                ]}
                // className={cardStyle}
            >
                <Meta
                    title={<Skeleton.Input active={true} size={"small"} />}
                    description={<Skeleton.Input active={true} size={"small"} />}
                />
            </Card>
        </>
    )
}

export default Loading