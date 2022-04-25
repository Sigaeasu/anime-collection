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

export default {
    cardStyle
}