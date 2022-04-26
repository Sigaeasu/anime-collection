import { css } from '@emotion/css'

const cardStyle = css`
    transition: 0.5s;
    &:hover {
        transform: scale(1.07);
    }
`

const deleteStyle = css`
    color: #c9c9c9;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transform: scale(1.5);
    }
`

export default {
    cardStyle,
    deleteStyle
}