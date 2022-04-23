import { css } from '@emotion/css'

const topContainer = css`
    display: flex;
`

const coverImage = css`

`

const collectionButton = css`
    background-color: red;
    position:fixed;
    right: 40px;
`

const collectionListSpan = css`
    background-color: red;
    margin: 0px 5px;
    padding: 0px 10px;
`

const linkStyle = css`
    color: black;
    &:hover {
        color: black
    }
`

export default {
    topContainer,
    coverImage,
    collectionButton,
    collectionListSpan,
    linkStyle
}