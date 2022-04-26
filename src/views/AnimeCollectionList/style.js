import { css } from '@emotion/css'

const cardStyle = css`
    color: black;
    width: 20%;
    padding: 10px;
    &:hover {
        color: black
    }
    @media (max-width: 480px) {
        width: 100%;
    }
`

const editContainer = css`
    color: #ffe100;
    transition: 0.2s;
    font-size: 24px;
    margin-left: 8px;
    cursor: pointer;
    &:hover {
        transform: scale(2);
        transition: 0.2s;
    }
`

export default {
    cardStyle,
    editContainer
}