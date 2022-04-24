import { css } from '@emotion/css'

const topContainer = css`
    display: flex;
    background-color: white;
    width: 100%;
    margin: 8px;
    border-radius: 5px;
`

const collectionContainer = css`
    display: flex;  
    flex-wrap: wrap;
    background-color: white;
    width: 100%;
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    align-items: center;
    text-align: center;
`

const coverImage = css`
    overflow:hidden;
    width: 100%;
`

const collectionButton = css`
    background-color: transparent;
    position:fixed;
    right: 40px;
    color: red;
    font-size: 25px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.5);
        transition: 0.2s;
        cursor: pointer;
    }
`

const collectionListSpan = css`
    background-color: #FFD07E;
    color: #100D2C;
    font-weight: bold;
    margin: 0px 5px;
    padding: 5px 20px;
    border-radius: 10px;
`

const collectionLink = css`
    color: black;
    &:hover {
        color: black
    }
`

const middleContainer = css`
    display: flex;
    background-color: transparent;
    width: 100%;
    margin: 8px;
    border-radius: 5px;
`

const leftContainer = css`
    width: 30%;
    height: auto;
    margin-right: 4px;
    background-color: white;
    border-radius: 5px;
`

export default {
    topContainer,
    collectionContainer,
    coverImage,
    collectionButton,
    collectionListSpan,
    collectionLink,
    middleContainer,
    leftContainer
}