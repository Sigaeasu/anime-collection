import { css } from '@emotion/css'

// #region header
const headerContainer = css`
    background-color: white;
    width: 100%;
    margin: 8px;
    border-radius: 5px;
    @media (min-width: 480px) {
        display: flex;
    }
`

const titleContainer = css`
    width: 50%;
    padding: 24px;
    @media (max-width: 480px) {
        width: 100%;
    }
`

const scoreContainer = css`
    display: flex;
    width: 50%;
    @media (max-width: 480px) {
        width: 100%;
    }
`

// #endregion

// #region collection
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
// #endregion

// #region body
const bodyContainer = css`
    background-color: transparent;
    width: 100%;
    margin: 8px;
    border-radius: 5px;
    @media (min-width: 480px) {
        display: flex;
    }
`

const leftContainer = css`
    width: 30%;
    height: auto;
    margin-right: 4px;
    background-color: white;
    border-radius: 5px;
    @media (max-width: 480px) {
        width: 100%;
    }
`

const rightContainer = css`
    width: 70%;
    height: auto;
    @media (min-width: 480px) {
        margin-left: 4px;
    }
    @media (max-width: 480px) {
        width: 100%;
    }
`

const descriptionContainer = css`
    width: 100%;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
`

const charactersContainer = css`
    width: 100%;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    margin-top: 5px;
    @media (min-width: 480px) {
        display: flex;
        flex: wrap;
    }
`

const charactersSpan = css`
    display: flex;
    width: 100%;
    padding: 5px;
    @media (min-width: 480px) {
        width: 25%;
        padding: 24px;
    }
`

export default {
    headerContainer,
    titleContainer,
    scoreContainer,
    collectionContainer,
    coverImage,
    collectionButton,
    collectionListSpan,
    collectionLink,
    bodyContainer,
    leftContainer,
    rightContainer,
    descriptionContainer,
    charactersContainer,
    charactersSpan
}